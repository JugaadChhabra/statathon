import pandas as pd
import os
import re
from typing import List, Dict, Any
from .models import Dataset, DatasetChunk
from django.db import transaction


class DatasetLoader:
    """Load and process CSV datasets for RAG"""
    
    def __init__(self, data_path: str = "data/"):
        self.data_path = data_path
        self.chunk_size = 100  # Rows per chunk
    
    def load_all_datasets(self):
        """Load all CSV files from data directory"""
        print(f"Loading datasets from {self.data_path}")
        
        if not os.path.exists(self.data_path):
            print(f"Data directory {self.data_path} not found!")
            return
        
        csv_files = [f for f in os.listdir(self.data_path) if f.endswith('.csv')]
        
        for csv_file in csv_files:
            file_path = os.path.join(self.data_path, csv_file)
            self.process_csv_file(file_path, csv_file)
    
    def process_csv_file(self, file_path: str, filename: str):
        """Process a single CSV file"""
        print(f"Processing {filename}...")
        
        try:
            # Extract metadata from filename
            level, section = self._parse_filename(filename)
            
            # Read CSV
            df = pd.read_csv(file_path)
            
            # Create or update dataset record
            dataset, created = Dataset.objects.get_or_create(
                name=filename,
                defaults={
                    'file_path': file_path,
                    'level': level,
                    'section': section,
                    'description': f"Dataset from {section}" if section else "",
                    'columns': list(df.columns),
                    'row_count': len(df),
                    'file_size': os.path.getsize(file_path)
                }
            )
            
            if not created:
                # Update existing dataset
                dataset.columns = list(df.columns)
                dataset.row_count = len(df)
                dataset.file_size = os.path.getsize(file_path)
                dataset.save()
            
            # Clear existing chunks and create new ones
            dataset.chunks.all().delete()
            self._create_chunks(dataset, df)
            
            print(f"✅ Loaded {filename}: {len(df)} rows, {len(df.columns)} columns")
            
        except Exception as e:
            print(f"❌ Error processing {filename}: {str(e)}")
    
    def _parse_filename(self, filename: str) -> tuple:
        """Extract level and section from filename"""
        # Pattern: LEVEL - 01(Section 1 and 1.1).csv
        match = re.search(r'LEVEL\s*-\s*(\d+).*?\((.*?)\)', filename, re.IGNORECASE)
        
        if match:
            level = f"Level {match.group(1)}"
            section = match.group(2)
        else:
            level = "Unknown"
            section = filename.replace('.csv', '')
        
        return level, section
    
    def _create_chunks(self, dataset: Dataset, df: pd.DataFrame):
        """Create searchable chunks from DataFrame"""
        chunks = []
        
        for i in range(0, len(df), self.chunk_size):
            chunk_df = df.iloc[i:i + self.chunk_size]
            
            # Convert chunk to searchable text
            content = self._df_to_text(chunk_df, dataset.columns)
            
            # Extract keywords for search
            keywords = self._extract_keywords(content)
            
            chunk = DatasetChunk(
                dataset=dataset,
                chunk_index=i // self.chunk_size,
                content=content,
                metadata={
                    'start_row': i,
                    'end_row': min(i + self.chunk_size, len(df)),
                    'columns': dataset.columns,
                    'sample_data': chunk_df.head(3).to_dict('records')
                },
                keywords=keywords
            )
            chunks.append(chunk)
        
        # Bulk create chunks
        DatasetChunk.objects.bulk_create(chunks)
    
    def _df_to_text(self, df: pd.DataFrame, columns: List[str]) -> str:
        """Convert DataFrame chunk to searchable text"""
        text_parts = []
        
        # Add column headers as context
        text_parts.append(f"Columns: {', '.join(columns)}")
        
        # Add summary statistics for numeric columns
        numeric_cols = df.select_dtypes(include=['number']).columns
        if len(numeric_cols) > 0:
            for col in numeric_cols:
                if not df[col].empty:
                    text_parts.append(f"{col}: mean={df[col].mean():.2f}, min={df[col].min()}, max={df[col].max()}")
        
        # Add sample rows as text
        for idx, row in df.head(10).iterrows():  # First 10 rows
            row_text = " | ".join([f"{col}: {str(val)}" for col, val in row.items() if pd.notna(val)])
            text_parts.append(f"Row {idx}: {row_text}")
        
        return "\n".join(text_parts)
    
    def _extract_keywords(self, content: str) -> List[str]:
        """Extract keywords for basic search"""
        # Simple keyword extraction
        words = re.findall(r'\b\w+\b', content.lower())
        
        # Filter common words and keep meaningful terms
        stop_words = {'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'row', 'col', 'column'}
        keywords = [w for w in words if len(w) > 2 and w not in stop_words]
        
        # Get unique keywords, limit to top 20
        return list(set(keywords))[:20]


def load_datasets():
    """Utility function to load all datasets"""
    loader = DatasetLoader()
    loader.load_all_datasets()