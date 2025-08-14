import json
from typing import Dict, List, Tuple, Any
from .core import analyze as analyze_v1
from .core_v2 import analyze_v2
import time


class AnalysisEvaluator:
    """Evaluate and compare analysis versions"""
    
    def __init__(self):
        self.results = {
            "v1": {"predictions": [], "latencies": []},
            "v2": {"predictions": [], "latencies": []},
            "ground_truth": []
        }
    
    def load_test_data(self, file_path: str = "sample_data/examples.json") -> List[Dict]:
        """Load test examples"""
        with open(file_path, 'r') as f:
            return json.load(f)
    
    def run_evaluation(self, test_data: List[Dict]) -> Dict[str, Any]:
        """Run evaluation on both versions"""
        
        print("Running evaluation on baseline vs v2...")
        
        for example in test_data:
            input_text = example["input_text"]
            expected = example["expected_category"]
            
            self.results["ground_truth"].append(expected)
            
            # Test V1 (baseline)
            start_time = time.time()
            result_v1, conf_v1, exp_v1 = analyze_v1(input_text)
            latency_v1 = (time.time() - start_time) * 1000
            
            self.results["v1"]["predictions"].append(result_v1)
            self.results["v1"]["latencies"].append(latency_v1)
            
            # Test V2 (enhanced)
            start_time = time.time()
            result_v2, conf_v2, exp_v2 = analyze_v2(input_text)
            latency_v2 = (time.time() - start_time) * 1000
            
            self.results["v2"]["predictions"].append(result_v2)
            self.results["v2"]["latencies"].append(latency_v2)
            
            print(f"Example {example['id']}:")
            print(f"  Expected: {expected}")
            print(f"  V1: {result_v1} (conf: {conf_v1:.2f}, {latency_v1:.1f}ms)")
            print(f"  V2: {result_v2} (conf: {conf_v2:.2f}, {latency_v2:.1f}ms)")
            print()
        
        return self._calculate_metrics()
    
    def _calculate_metrics(self) -> Dict[str, Any]:
        """Calculate accuracy, precision, recall, F1 for both versions"""
        
        metrics = {}
        
        for version in ["v1", "v2"]:
            predictions = self.results[version]["predictions"]
            ground_truth = self.results["ground_truth"]
            latencies = self.results[version]["latencies"]
            
            # Accuracy
            correct = sum(1 for p, g in zip(predictions, ground_truth) if p == g)
            accuracy = correct / len(ground_truth) if ground_truth else 0
            
            # Get unique categories
            all_categories = set(ground_truth + predictions)
            
            # Per-category metrics
            category_metrics = {}
            total_precision = 0
            total_recall = 0
            total_f1 = 0
            
            for category in all_categories:
                tp = sum(1 for p, g in zip(predictions, ground_truth) 
                        if p == category and g == category)
                fp = sum(1 for p, g in zip(predictions, ground_truth) 
                        if p == category and g != category)
                fn = sum(1 for p, g in zip(predictions, ground_truth) 
                        if p != category and g == category)
                
                precision = tp / (tp + fp) if (tp + fp) > 0 else 0
                recall = tp / (tp + fn) if (tp + fn) > 0 else 0
                f1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0
                
                category_metrics[category] = {
                    "precision": precision,
                    "recall": recall,
                    "f1": f1
                }
                
                total_precision += precision
                total_recall += recall
                total_f1 += f1
            
            # Macro averages
            num_categories = len(all_categories)
            macro_precision = total_precision / num_categories if num_categories > 0 else 0
            macro_recall = total_recall / num_categories if num_categories > 0 else 0
            macro_f1 = total_f1 / num_categories if num_categories > 0 else 0
            
            metrics[version] = {
                "accuracy": accuracy,
                "macro_precision": macro_precision,
                "macro_recall": macro_recall,
                "macro_f1": macro_f1,
                "avg_latency_ms": sum(latencies) / len(latencies) if latencies else 0,
                "category_metrics": category_metrics,
                "confusion_matrix": self._create_confusion_matrix(predictions, ground_truth, all_categories)
            }
        
        return metrics
    
    def _create_confusion_matrix(self, predictions: List[str], ground_truth: List[str], 
                               categories: set) -> Dict[str, Dict[str, int]]:
        """Create confusion matrix"""
        matrix = {true_cat: {pred_cat: 0 for pred_cat in categories} 
                 for true_cat in categories}
        
        for pred, true in zip(predictions, ground_truth):
            if true in matrix and pred in matrix[true]:
                matrix[true][pred] += 1
        
        return matrix
    
    def print_evaluation_report(self, metrics: Dict[str, Any]):
        """Print detailed evaluation report"""
        
        print("="*60)
        print("EVALUATION REPORT: Baseline vs Logic v2")
        print("="*60)
        
        print(f"\n📊 OVERALL PERFORMANCE:")
        print(f"{'Metric':<20} {'Baseline (v1)':<15} {'Enhanced (v2)':<15} {'Improvement':<12}")
        print("-" * 65)
        
        v1_metrics = metrics["v1"]
        v2_metrics = metrics["v2"]
        
        # Key metrics comparison
        key_metrics = [
            ("Accuracy", "accuracy"),
            ("Macro F1", "macro_f1"),
            ("Macro Precision", "macro_precision"),
            ("Macro Recall", "macro_recall"),
            ("Avg Latency (ms)", "avg_latency_ms")
        ]
        
        for metric_name, metric_key in key_metrics:
            v1_val = v1_metrics[metric_key]
            v2_val = v2_metrics[metric_key]
            
            if metric_key == "avg_latency_ms":
                improvement = f"{((v1_val - v2_val) / v1_val * 100):+.1f}%" if v1_val > 0 else "N/A"
            else:
                improvement = f"{((v2_val - v1_val) / v1_val * 100):+.1f}%" if v1_val > 0 else "N/A"
            
            print(f"{metric_name:<20} {v1_val:<15.3f} {v2_val:<15.3f} {improvement:<12}")
        
        print(f"\n🎯 CLASSIFICATION RESULTS:")
        print("Expected vs Predicted:")
        
        for i, (pred_v1, pred_v2, true) in enumerate(zip(
            self.results["v1"]["predictions"],
            self.results["v2"]["predictions"], 
            self.results["ground_truth"]
        )):
            status_v1 = "✅" if pred_v1 == true else "❌"
            status_v2 = "✅" if pred_v2 == true else "❌"
            print(f"  {i+1}. Expected: {true}")
            print(f"     V1: {pred_v1} {status_v1}")
            print(f"     V2: {pred_v2} {status_v2}")
        
        print(f"\n📈 SUMMARY:")
        accuracy_improvement = ((v2_metrics["accuracy"] - v1_metrics["accuracy"]) / v1_metrics["accuracy"] * 100) if v1_metrics["accuracy"] > 0 else 0
        f1_improvement = ((v2_metrics["macro_f1"] - v1_metrics["macro_f1"]) / v1_metrics["macro_f1"] * 100) if v1_metrics["macro_f1"] > 0 else 0
        
        print(f"  • V2 shows {accuracy_improvement:+.1f}% accuracy improvement")
        print(f"  • V2 shows {f1_improvement:+.1f}% F1-score improvement")
        print(f"  • V1 average latency: {v1_metrics['avg_latency_ms']:.1f}ms")
        print(f"  • V2 average latency: {v2_metrics['avg_latency_ms']:.1f}ms")
        
        # Recommendation
        if v2_metrics["accuracy"] > v1_metrics["accuracy"]:
            print(f"\n🏆 RECOMMENDATION: Upgrade to Logic v2")
            print(f"   Logic v2 provides better accuracy with enhanced features")
        else:
            print(f"\n⚠️  RECOMMENDATION: Further tune Logic v2")
            print(f"   Consider adjusting weights or adding more features")


def run_evaluation():
    """Main evaluation function"""
    evaluator = AnalysisEvaluator()
    
    # Load test data
    test_data = evaluator.load_test_data()
    
    # Run evaluation
    metrics = evaluator.run_evaluation(test_data)
    
    # Print report
    evaluator.print_evaluation_report(metrics)
    
    return metrics


if __name__ == "__main__":
    metrics = run_evaluation()