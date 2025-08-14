module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/components/context/ThemeContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ThemeProvider": ()=>ThemeProvider,
    "useTheme": ()=>useTheme
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    isDark: false,
    toggleTheme: ()=>{}
});
const useTheme = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
const ThemeProvider = ({ children })=>{
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleTheme = ()=>{
        setIsDark((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            isDark,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/context/ThemeContext.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/components/utils/styles.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createStyles": ()=>createStyles
});
'use client';
// ============================================================================
// ENHANCED ADMIN DASHBOARD THEME COLORS
// ============================================================================
const THEME_COLORS = {
    dark: {
        // Background gradients
        primaryBg: 'from-slate-900 via-purple-900 to-slate-900',
        secondaryBg: 'from-slate-800 via-slate-900 to-slate-800',
        // Card backgrounds
        cardBg: 'rgba(15, 23, 42, 0.8)',
        cardBorder: 'rgba(148, 163, 184, 0.2)',
        cardGlow: '#6366f1',
        // Text colors
        textPrimary: '#f8fafc',
        textSecondary: '#cbd5e1',
        textMuted: '#64748b',
        // Accent colors
        accent: {
            primary: '#6366f1',
            secondary: '#8b5cf6',
            success: '#10b981',
            warning: '#f59e0b',
            error: '#ef4444'
        },
        // Gradients
        gradients: {
            primary: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            secondary: 'linear-gradient(135deg, #1e293b, #334155)',
            success: 'linear-gradient(135deg, #059669, #10b981)',
            glass: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8))'
        }
    },
    light: {
        // Background gradients
        primaryBg: 'from-slate-50 via-blue-50 to-slate-50',
        secondaryBg: 'from-white via-slate-50 to-white',
        // Card backgrounds
        cardBg: 'rgba(255, 255, 255, 0.9)',
        cardBorder: 'rgba(203, 213, 225, 0.3)',
        cardGlow: '#3b82f6',
        // Text colors
        textPrimary: '#1e293b',
        textSecondary: '#475569',
        textMuted: '#64748b',
        // Accent colors
        accent: {
            primary: '#3b82f6',
            secondary: '#6366f1',
            success: '#059669',
            warning: '#d97706',
            error: '#dc2626'
        },
        // Gradients
        gradients: {
            primary: 'linear-gradient(135deg, #3b82f6, #6366f1)',
            secondary: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
            success: 'linear-gradient(135deg, #059669, #10b981)',
            glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.8))'
        }
    }
};
const createStyles = (isDark)=>{
    const theme = isDark ? THEME_COLORS.dark : THEME_COLORS.light;
    return {
        // Enhanced glass morphism card
        glassmorphCard: (glowColor = null, variant = 'default')=>{
            const actualGlow = glowColor || theme.cardGlow;
            const variants = {
                default: {
                    transform: 'translateY(0)',
                    boxShadow: isDark ? `0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px ${theme.cardBorder}, 0 0 20px ${actualGlow}20` : `0 8px 32px rgba(59, 130, 246, 0.15), 0 0 0 1px ${theme.cardBorder}, 0 0 20px ${actualGlow}15`
                },
                elevated: {
                    transform: 'translateY(-2px)',
                    boxShadow: isDark ? `0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px ${theme.cardBorder}, 0 0 30px ${actualGlow}30` : `0 20px 40px rgba(59, 130, 246, 0.2), 0 0 0 1px ${theme.cardBorder}, 0 0 30px ${actualGlow}25`
                },
                flat: {
                    transform: 'translateY(0)',
                    boxShadow: isDark ? `0 4px 16px rgba(0, 0, 0, 0.3), 0 0 0 1px ${theme.cardBorder}` : `0 4px 16px rgba(59, 130, 246, 0.1), 0 0 0 1px ${theme.cardBorder}`
                }
            };
            return {
                background: theme.cardBg,
                border: `1px solid ${theme.cardBorder}`,
                borderRadius: '24px',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                padding: '2rem',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                ...variants[variant]
            };
        },
        // Enhanced form input with admin dashboard styling
        formInput: {
            width: '100%',
            padding: '16px 20px',
            borderRadius: '16px',
            border: `2px solid ${isDark ? 'rgba(99, 102, 241, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
            background: theme.cardBg,
            color: theme.textPrimary,
            fontSize: '1rem',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            outline: 'none',
            fontFamily: "'Inter', -apple-system, sans-serif",
            fontWeight: '500',
            boxShadow: isDark ? `inset 0 2px 4px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(99, 102, 241, 0.2)` : `inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(59, 130, 246, 0.2)`
        },
        // Enhanced label styling
        label: {
            display: 'block',
            marginBottom: '12px',
            fontWeight: '700',
            color: theme.textPrimary,
            fontSize: '1rem',
            fontFamily: "'Inter', -apple-system, sans-serif",
            textShadow: isDark ? '0 2px 4px rgba(0, 0, 0, 0.5)' : 'none',
            letterSpacing: '0.01em'
        },
        // Enhanced gradient text
        gradientText: {
            backgroundImage: isDark ? 'linear-gradient(135deg, #ffffff, #e2e8f0)' : 'linear-gradient(135deg, #1e293b, #475569)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        },
        // Admin dashboard specific styles
        dashboardContainer: {
            background: isDark ? 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)' : 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f8fafc 100%)',
            minHeight: '100vh',
            position: 'relative'
        },
        sectionCard: {
            background: theme.cardBg,
            border: `1px solid ${theme.cardBorder}`,
            borderRadius: '20px',
            padding: '2rem',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: isDark ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(148, 163, 184, 0.1)' : '0 8px 32px rgba(59, 130, 246, 0.1), 0 0 0 1px rgba(203, 213, 225, 0.3)',
            transition: 'all 0.3s ease'
        },
        primaryButton: {
            background: theme.gradients.primary,
            color: 'white',
            border: 'none',
            borderRadius: '16px',
            padding: '16px 32px',
            fontSize: '1rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: "'Inter', -apple-system, sans-serif",
            boxShadow: isDark ? '0 8px 24px rgba(99, 102, 241, 0.4)' : '0 8px 24px rgba(59, 130, 246, 0.3)'
        },
        statsCard: {
            background: theme.cardBg,
            border: `1px solid ${theme.cardBorder}`,
            borderRadius: '16px',
            padding: '1.5rem',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: isDark ? '0 4px 16px rgba(0, 0, 0, 0.2)' : '0 4px 16px rgba(59, 130, 246, 0.1)'
        },
        // Theme colors accessor
        theme
    };
};
}),
"[project]/app/components/Header.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/utils/styles.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
// ============================================================================
// ADMIN DASHBOARD HEADER
// ============================================================================
const Header = ()=>{
    const { isDark, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStyles"])(isDark);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 backdrop-blur-xl border-b",
        style: {
            borderColor: styles.theme.cardBorder,
            background: styles.theme.cardBg
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold",
                                style: {
                                    background: styles.theme.gradients.primary,
                                    boxShadow: isDark ? '0 8px 16px rgba(99, 102, 241, 0.3)' : '0 8px 16px rgba(59, 130, 246, 0.2)'
                                },
                                children: "📊"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold",
                                        style: styles.gradientText,
                                        children: "Survey Explorer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        style: {
                                            color: styles.theme.textMuted
                                        },
                                        children: "Advanced Analytics Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Header.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full animate-pulse",
                                        style: {
                                            background: styles.theme.accent.success
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium",
                                        style: {
                                            color: styles.theme.textSecondary
                                        },
                                        children: "System Online"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Header.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleTheme,
                                className: "p-3 rounded-xl transition-all duration-300 hover:scale-105",
                                style: {
                                    background: styles.theme.cardBg,
                                    border: `1px solid ${styles.theme.cardBorder}`,
                                    color: styles.theme.textPrimary,
                                    boxShadow: isDark ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.1)'
                                },
                                title: `Switch to ${isDark ? 'light' : 'dark'} mode`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg",
                                    children: isDark ? '☀️' : '🌙'
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold",
                                style: {
                                    background: styles.theme.gradients.secondary,
                                    color: styles.theme.textPrimary,
                                    border: `2px solid ${styles.theme.cardBorder}`
                                },
                                children: "👤"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Header.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/Header.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Header.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/app/components/utils/api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// API utilities for Django backend integration
// Based on Django backend structure in statathon project
// Backend endpoints: /api/v1/analyze/, /api/v1/analyses/, /api/v1/health/
__turbopack_context__.s({
    "analyzeText": ()=>analyzeText,
    "getAnalyses": ()=>getAnalyses,
    "getHealth": ()=>getHealth
});
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8000/api/v1") || 'http://localhost:8000/api/v1';
async function analyzeText(input_text, options = {}) {
    try {
        const requestData = {
            input_text,
            options: {
                survey_name: options.survey_name || options.surveyName,
                survey_year: options.survey_year || options.surveyYear,
                analysis_type: options.analysis_type || options.analysisType,
                min_responses: options.min_responses || options.minResponses,
                confidence_level: options.confidence_level || options.confidence,
                question_filter: options.question_filter || options.questionFilter
            }
        };
        console.log('Making API request to:', `${API_BASE_URL}/analyze/`);
        console.log('Request data:', requestData);
        const response = await fetch(`${API_BASE_URL}/analyze/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(requestData)
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorText}`);
        }
        const data = await response.json();
        console.log('API response:', data);
        return data;
    } catch (error) {
        console.error('Error in analyzeText:', error);
        throw error;
    }
}
async function getAnalyses() {
    try {
        const response = await fetch(`${API_BASE_URL}/analyses/`, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch analyses: ${response.status}`);
        }
        const data = await response.json();
        // Django typically returns paginated results
        return data.results || data;
    } catch (error) {
        console.error('Error fetching analyses:', error);
        return [];
    }
}
async function getHealth() {
    try {
        const response = await fetch(`${API_BASE_URL}/health/`, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`Health check failed: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error checking health:', error);
        return null;
    }
}
}),
"[project]/app/components/AnalysisParametersForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/utils/styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/utils/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
// Simple inline components
const InputValidation = ({ error })=>error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-red-500 text-sm mt-1",
        children: error
    }, void 0, false, {
        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
        lineNumber: 12,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)) : null;
const AnimatedButton = ({ children, loading, style, className, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "submit",
        disabled: loading,
        className: `transition-all duration-300 ${className || ''}`,
        style: style,
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
        lineNumber: 28,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// Stat card component for dashboard metrics
const StatCard = ({ title, value, icon, color, subtitle })=>{
    const { isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStyles"])(isDark);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 rounded-lg",
        style: styles.glassmorphCard(color),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium",
                        style: {
                            color: styles.theme.textSecondary
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold",
                style: {
                    color: styles.theme.textPrimary
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs mt-1",
                style: {
                    color: styles.theme.textSecondary
                },
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const AnalysisParametersForm = ({ onAnalyze, loading, validationErrors })=>{
    const { isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStyles"])(isDark);
    // Form state management
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        surveyName: '',
        surveyYear: 2024,
        questionFilter: '',
        minResponses: 100,
        analysisType: 'summary',
        confidence: 95
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [activeField, setActiveField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSurvey, setSelectedSurvey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [availableSurveys, setAvailableSurveys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [analysisTypes, setAnalysisTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Load statistics and health on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadData = async ()=>{
            try {
                // Load recent analyses for statistics
                const analyses = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnalyses"])();
                const health = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHealth"])();
                // Set statistics from backend data
                setStats({
                    totalAnalyses: analyses.length,
                    successRate: health ? 1.0 : 0.0,
                    avgProcessingTime: 0,
                    popularSurveys: [],
                    recentActivity: []
                });
                // Load surveys and analysis types from backend
                // TODO: Replace with actual API calls when backend endpoints are available
                setAvailableSurveys([]);
                setAnalysisTypes([]);
            } catch (error) {
                console.error('Failed to load data:', error);
                // Set fallback stats
                setStats({
                    totalAnalyses: 0,
                    successRate: 0,
                    avgProcessingTime: 0,
                    popularSurveys: [],
                    recentActivity: []
                });
                setAvailableSurveys([]);
                setAnalysisTypes([]);
            }
        };
        loadData();
    }, []);
    // Update selected survey when survey name changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const survey = availableSurveys.find((s)=>s.name === formData.surveyName);
        setSelectedSurvey(survey || null);
        if (survey) {
            setFormData((prev)=>({
                    ...prev,
                    surveyYear: survey.year
                }));
        }
    }, [
        formData.surveyName,
        availableSurveys
    ]);
    // Validation logic
    const validateForm = ()=>{
        const newErrors = {};
        if (!formData.surveyName.trim()) {
            newErrors.surveyName = 'Survey selection is required';
        }
        if (formData.minResponses < 50 || formData.minResponses > 10000) {
            newErrors.minResponses = 'Must be between 50 and 10,000';
        }
        if (formData.confidence < 90 || formData.confidence > 99) {
            newErrors.confidence = 'Must be between 90% and 99%';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (validateForm()) {
            onAnalyze(formData);
        }
    };
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        if (errors[field]) {
            setErrors((prev)=>({
                    ...prev,
                    [field]: undefined
                }));
        }
    };
    // Enhanced input component with admin styling
    const FormField = ({ label, children, error, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    style: styles.label,
                    className: "flex items-center gap-2",
                    children: [
                        icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg",
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 206,
                            columnNumber: 18
                        }, ("TURBOPACK compile-time value", void 0)),
                        label
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 205,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputValidation, {
                    error: error
                }, void 0, false, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 210,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
            lineNumber: 204,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    // Enhanced stats cards
    const StatsCard = ({ title, value, icon, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.statsCard,
            className: "group hover:scale-105 transition-all duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium",
                            style: {
                                color: styles.theme.textSecondary
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 226,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl",
                            style: {
                                color
                            },
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 229,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 225,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-2xl font-bold",
                    style: {
                        color: styles.theme.textPrimary
                    },
                    children: value
                }, void 0, false, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 231,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
            lineNumber: 221,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.dashboardContainer,
        className: "min-h-screen p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.glassmorphCard(styles.theme.accent.primary, 'elevated'),
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold mb-4",
                            style: styles.gradientText,
                            children: "Survey Analysis Configuration"
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg",
                            style: {
                                color: styles.theme.textSecondary
                            },
                            children: "Configure your survey analysis parameters with precision and ease"
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                            title: "Available Surveys",
                            value: availableSurveys.length,
                            icon: "📊",
                            color: styles.theme.accent.primary,
                            subtitle: "Backend datasets"
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                            title: "Total Analyses",
                            value: stats?.totalAnalyses || 0,
                            icon: "�",
                            color: styles.theme.accent.success,
                            subtitle: "Completed successfully"
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                            title: "Success Rate",
                            value: `${((stats?.successRate || 0) * 100).toFixed(1)}%`,
                            icon: "✅",
                            color: styles.theme.accent.warning,
                            subtitle: "Analysis reliability"
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                            title: "Avg Processing",
                            value: `${(stats?.avgProcessingTime || 0).toFixed(1)}s`,
                            icon: "⚡",
                            color: styles.theme.accent.secondary,
                            subtitle: "Response time"
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.glassmorphCard(styles.theme.accent.primary),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl",
                                            children: "🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold",
                                            style: {
                                                color: styles.theme.textPrimary
                                            },
                                            children: "Survey Selection"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 293,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                            label: "Survey Dataset",
                                            icon: "📋",
                                            error: errors.surveyName,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    style: {
                                                        ...styles.formInput,
                                                        borderColor: activeField === 'surveyName' ? styles.theme.accent.primary : styles.formInput.border
                                                    },
                                                    value: formData.surveyName,
                                                    onChange: (e)=>handleInputChange('surveyName', e.target.value),
                                                    onFocus: ()=>setActiveField('surveyName'),
                                                    onBlur: ()=>setActiveField(null),
                                                    className: "hover:border-opacity-60 focus:border-opacity-100",
                                                    title: "Select survey dataset",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select a survey..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        availableSurveys.map((survey)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: survey.name,
                                                                children: [
                                                                    survey.name,
                                                                    " (",
                                                                    survey.year,
                                                                    ") - ",
                                                                    survey.datasetSize
                                                                ]
                                                            }, survey.name, true, {
                                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                                lineNumber: 316,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                selectedSurvey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm",
                                                            style: {
                                                                color: styles.theme.textSecondary
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: selectedSurvey.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2 mt-2",
                                                            children: selectedSurvey.categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                                                                    children: category
                                                                }, category, false, {
                                                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                                    lineNumber: 328,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs mt-2",
                                                            style: {
                                                                color: styles.theme.textSecondary
                                                            },
                                                            children: [
                                                                selectedSurvey.totalResponses.toLocaleString(),
                                                                " responses • Last updated: ",
                                                                selectedSurvey.lastUpdated
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                            label: "Survey Year",
                                            icon: "📅",
                                            error: errors.surveyYear,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    style: {
                                                        ...styles.formInput,
                                                        borderColor: activeField === 'surveyYear' ? styles.theme.accent.primary : styles.formInput.border
                                                    },
                                                    value: formData.surveyYear,
                                                    onChange: (e)=>handleInputChange('surveyYear', parseInt(e.target.value)),
                                                    onFocus: ()=>setActiveField('surveyYear'),
                                                    onBlur: ()=>setActiveField(null),
                                                    className: "hover:border-opacity-60 focus:border-opacity-100",
                                                    title: "Select survey year",
                                                    disabled: !!selectedSurvey,
                                                    children: selectedSurvey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: selectedSurvey.year,
                                                        children: selectedSurvey.year
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 2024,
                                                                children: "2024"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 2023,
                                                                children: "2023"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 2022,
                                                                children: "2022"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 2021,
                                                                children: "2021"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                                lineNumber: 366,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 2020,
                                                                children: "2020"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                                lineNumber: 367,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                selectedSurvey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs mt-1",
                                                    style: {
                                                        color: styles.theme.textSecondary
                                                    },
                                                    children: "Year automatically set based on survey selection"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.glassmorphCard(styles.theme.accent.secondary),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl",
                                            children: "⚙️"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold",
                                            style: {
                                                color: styles.theme.textPrimary
                                            },
                                            children: "Analysis Parameters"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 384,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                            label: "Analysis Type",
                                            icon: "🎯",
                                            error: errors.analysisType,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    style: {
                                                        ...styles.formInput,
                                                        borderColor: activeField === 'analysisType' ? styles.theme.accent.secondary : styles.formInput.border
                                                    },
                                                    value: formData.analysisType,
                                                    onChange: (e)=>handleInputChange('analysisType', e.target.value),
                                                    onFocus: ()=>setActiveField('analysisType'),
                                                    onBlur: ()=>setActiveField(null),
                                                    className: "hover:border-opacity-60 focus:border-opacity-100",
                                                    title: "Select analysis type",
                                                    children: analysisTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: type.value,
                                                            children: type.label
                                                        }, type.value, false, {
                                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs mt-1",
                                                    style: {
                                                        color: styles.theme.textSecondary
                                                    },
                                                    children: analysisTypes.find((t)=>t.value === formData.analysisType)?.description || 'Select an analysis type for details'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                            label: "Minimum Responses",
                                            icon: "📊",
                                            error: errors.minResponses,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                style: {
                                                    ...styles.formInput,
                                                    borderColor: activeField === 'minResponses' ? styles.theme.accent.secondary : styles.formInput.border
                                                },
                                                value: formData.minResponses,
                                                onChange: (e)=>handleInputChange('minResponses', parseInt(e.target.value)),
                                                onFocus: ()=>setActiveField('minResponses'),
                                                onBlur: ()=>setActiveField(null),
                                                min: "50",
                                                max: "10000",
                                                step: "50",
                                                placeholder: "Minimum sample size...",
                                                className: "hover:border-opacity-60 focus:border-opacity-100"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                lineNumber: 417,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 416,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 389,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 381,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.glassmorphCard(styles.theme.accent.success),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl",
                                    children: "🔬"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    style: {
                                        color: styles.theme.textPrimary
                                    },
                                    children: "Advanced Configuration"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                    label: "Question Filter",
                                    icon: "🔍",
                                    error: errors.questionFilter,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        style: {
                                            ...styles.formInput,
                                            borderColor: activeField === 'questionFilter' ? styles.theme.accent.success : styles.formInput.border
                                        },
                                        value: formData.questionFilter,
                                        onChange: (e)=>handleInputChange('questionFilter', e.target.value),
                                        onFocus: ()=>setActiveField('questionFilter'),
                                        onBlur: ()=>setActiveField(null),
                                        placeholder: "Filter questions by keyword...",
                                        className: "hover:border-opacity-60 focus:border-opacity-100"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                        lineNumber: 451,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                    label: "Confidence Level",
                                    icon: "📈",
                                    error: errors.confidence,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "90",
                                                max: "99",
                                                value: formData.confidence,
                                                onChange: (e)=>handleInputChange('confidence', parseInt(e.target.value)),
                                                className: "w-full h-2 rounded-lg appearance-none cursor-pointer",
                                                title: `Confidence level: ${formData.confidence}%`,
                                                "aria-label": `Confidence level: ${formData.confidence}%`,
                                                style: {
                                                    background: `linear-gradient(to right, ${styles.theme.accent.success} 0%, ${styles.theme.accent.success} ${(formData.confidence - 90) / 9 * 100}%, ${styles.theme.cardBorder} ${(formData.confidence - 90) / 9 * 100}%, ${styles.theme.cardBorder} 100%)`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                lineNumber: 470,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                style: {
                                                    color: styles.theme.textSecondary
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "90%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        style: {
                                                            color: styles.theme.accent.success
                                                        },
                                                        children: [
                                                            formData.confidence,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 485,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "99%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                lineNumber: 483,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                        lineNumber: 469,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 468,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 449,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 441,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.glassmorphCard(null, 'elevated'),
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedButton, {
                                    onClick: ()=>{},
                                    loading: loading,
                                    className: "text-lg px-12 py-4",
                                    style: styles.primaryButton,
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                lineNumber: 506,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Analyzing Data..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                        lineNumber: 505,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "🚀"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                lineNumber: 511,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Start Analysis"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                        lineNumber: 510,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 498,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                validationErrors.general && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-400 text-sm",
                                        children: validationErrors.general
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                        lineNumber: 520,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 519,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 497,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-sm",
                            style: {
                                color: styles.theme.textMuted
                            },
                            children: "Analysis typically takes 30-60 seconds depending on dataset size"
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 525,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 496,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
            lineNumber: 239,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AnalysisParametersForm;
}),
"[project]/app/components/shared/SharedComponents.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "FormField": ()=>FormField,
    "GlassCard": ()=>GlassCard,
    "LoadingSpinner": ()=>LoadingSpinner,
    "StatusBadge": ()=>StatusBadge
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/utils/styles.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const GlassCard = ({ children, style = {}, glowColor = null, onHover = true })=>{
    const { isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStyles"])(isDark);
    const cardStyle = {
        ...styles.glassmorphCard(glowColor),
        ...style
    };
    const handleMouseEnter = (e)=>{
        if (!onHover) return;
        const actualGlow = glowColor || (isDark ? '#6d28d9' : '#3b82f6');
        const element = e.currentTarget;
        element.style.transform = 'translateY(-4px) scale(1.01)';
        element.style.boxShadow = isDark ? `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(148, 163, 184, 0.2), 0 0 30px ${actualGlow}30` : `0 20px 40px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5), 0 0 30px ${actualGlow}25`;
    };
    const handleMouseLeave = (e)=>{
        if (!onHover) return;
        const actualGlow = glowColor || (isDark ? '#6d28d9' : '#3b82f6');
        const element = e.currentTarget;
        element.style.transform = 'translateY(0) scale(1)';
        element.style.boxShadow = isDark ? `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(148, 163, 184, 0.1), 0 0 20px ${actualGlow}20` : `0 8px 32px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3), 0 0 20px ${actualGlow}15`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: cardStyle,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: isDark ? 'linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent)',
                    borderRadius: '20px 20px 0 0'
                }
            }, void 0, false, {
                fileName: "[project]/app/components/shared/SharedComponents.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/shared/SharedComponents.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const FormField = ({ label, children, error = null })=>{
    const { isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStyles"])(isDark);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: styles.label,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/shared/SharedComponents.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children,
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: '#dc2626',
                    fontSize: '0.875rem',
                    marginTop: '8px',
                    fontFamily: "'Inter', -apple-system, sans-serif"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/app/components/shared/SharedComponents.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/shared/SharedComponents.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const LoadingSpinner = ({ size = '20px' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: size,
            height: size,
            border: '3px solid rgba(255, 255, 255, 0.3)',
            borderTop: '3px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
        }
    }, void 0, false, {
        fileName: "[project]/app/components/shared/SharedComponents.tsx",
        lineNumber: 98,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const StatusBadge = ({ isValid, validText = "Ready", invalidText = "Missing fields" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: '16px 24px',
            borderRadius: '24px',
            fontSize: '1rem',
            fontWeight: '700',
            fontFamily: "'Inter', -apple-system, sans-serif",
            background: isValid ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.3))' : 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.3))',
            color: isValid ? '#059669' : '#dc2626',
            border: isValid ? '2px solid rgba(34, 197, 94, 0.4)' : '2px solid rgba(239, 68, 68, 0.4)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: isValid ? '0 4px 16px rgba(34, 197, 94, 0.2)' : '0 4px 16px rgba(239, 68, 68, 0.2)'
        },
        children: isValid ? `✅ ${validText}` : `⚠️ ${invalidText}`
    }, void 0, false, {
        fileName: "[project]/app/components/shared/SharedComponents.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/components/AnalysisResults.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/utils/styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2f$SharedComponents$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/shared/SharedComponents.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// ============================================================================
// ANALYSIS RESULTS COMPONENT
// ============================================================================
const AnalysisResults = ({ result })=>{
    const { isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStyles"])(isDark);
    // Handle empty/undefined data gracefully
    if (!result) return null;
    const { title = 'Analysis Results', confidence = 0, factors = [], latency = 0, timestamp = new Date().toLocaleString(), version = '1.0.0', summary, insights = [], methodology, dataQuality } = result;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2f$SharedComponents$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                style: {
                    marginBottom: '2rem'
                },
                glowColor: isDark ? '#10b981' : '#059669',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "m-0 mb-6 text-2xl font-bold flex items-center gap-3",
                        style: {
                            fontFamily: "'Inter', -apple-system, sans-serif",
                            ...styles.gradientText,
                            textShadow: isDark ? '0 2px 4px rgba(0, 0, 0, 0.5)' : 'none'
                        },
                        children: [
                            "📊 ",
                            title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 p-4 rounded-lg",
                        style: {
                            backgroundColor: isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(5, 150, 105, 0.1)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-semibold mb-2",
                                style: {
                                    color: styles.theme.textPrimary
                                },
                                children: "Executive Summary"
                            }, void 0, false, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-relaxed",
                                style: {
                                    color: styles.theme.textSecondary
                                },
                                children: summary
                            }, void 0, false, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-lg",
                                style: {
                                    backgroundColor: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                style: {
                                                    color: styles.theme.textSecondary
                                                },
                                                children: "Confidence Score"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: "🎯"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        style: {
                                            color: styles.theme.accent.primary
                                        },
                                        children: [
                                            confidence,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs mt-1",
                                        style: {
                                            color: styles.theme.textSecondary
                                        },
                                        children: "Statistical reliability"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-lg",
                                style: {
                                    backgroundColor: isDark ? 'rgba(168, 85, 247, 0.1)' : 'rgba(147, 51, 234, 0.1)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                style: {
                                                    color: styles.theme.textSecondary
                                                },
                                                children: "Processing Time"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: "⚡"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        style: {
                                            color: styles.theme.accent.secondary
                                        },
                                        children: [
                                            latency,
                                            "s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs mt-1",
                                        style: {
                                            color: styles.theme.textSecondary
                                        },
                                        children: "Analysis duration"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-lg",
                                style: {
                                    backgroundColor: isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(5, 150, 105, 0.1)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                style: {
                                                    color: styles.theme.textSecondary
                                                },
                                                children: "Factors Identified"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: "🔍"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        style: {
                                            color: styles.theme.accent.success
                                        },
                                        children: factors.length
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs mt-1",
                                        style: {
                                            color: styles.theme.textSecondary
                                        },
                                        children: "Key findings"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AnalysisResults.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            factors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2f$SharedComponents$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                glowColor: isDark ? '#3b82f6' : '#2563eb',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xl font-bold mb-4 flex items-center gap-2",
                        style: {
                            color: styles.theme.textPrimary
                        },
                        children: "🔑 Key Factors"
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: factors.map((factor, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-lg border-l-4",
                                style: {
                                    backgroundColor: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
                                    borderLeftColor: styles.theme.accent.primary
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg",
                                            children: "📌"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisResults.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            style: {
                                                color: styles.theme.textPrimary
                                            },
                                            children: factor
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisResults.tsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AnalysisResults.tsx",
                                    lineNumber: 128,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AnalysisResults.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            insights.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2f$SharedComponents$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                glowColor: isDark ? '#8b5cf6' : '#7c3aed',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xl font-bold mb-4 flex items-center gap-2",
                        style: {
                            color: styles.theme.textPrimary
                        },
                        children: "💡 Key Insights"
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: insights.map((insight, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-lg",
                                style: {
                                    backgroundColor: isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(124, 58, 237, 0.1)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg",
                                            children: "🎯"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisResults.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            style: {
                                                color: styles.theme.textPrimary
                                            },
                                            children: insight
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisResults.tsx",
                                            lineNumber: 155,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AnalysisResults.tsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AnalysisResults.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            dataQuality && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2f$SharedComponents$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                glowColor: isDark ? '#10b981' : '#059669',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xl font-bold mb-4 flex items-center gap-2",
                        style: {
                            color: styles.theme.textPrimary
                        },
                        children: "📈 Data Quality Assessment"
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        style: {
                                            color: styles.theme.accent.success
                                        },
                                        children: dataQuality.sampleSize.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm",
                                        style: {
                                            color: styles.theme.textSecondary
                                        },
                                        children: "Sample Size"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        style: {
                                            color: styles.theme.accent.success
                                        },
                                        children: [
                                            (dataQuality.responseRate * 100).toFixed(1),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm",
                                        style: {
                                            color: styles.theme.textSecondary
                                        },
                                        children: "Response Rate"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        style: {
                                            color: styles.theme.accent.success
                                        },
                                        children: [
                                            (dataQuality.completeness * 100).toFixed(1),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm",
                                        style: {
                                            color: styles.theme.textSecondary
                                        },
                                        children: "Data Completeness"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AnalysisResults.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            methodology && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2f$SharedComponents$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                glowColor: isDark ? '#6366f1' : '#4f46e5',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xl font-bold mb-4 flex items-center gap-2",
                        style: {
                            color: styles.theme.textPrimary
                        },
                        children: "🔬 Methodology"
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-lg",
                        style: {
                            backgroundColor: isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(79, 70, 229, 0.1)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm leading-relaxed",
                            style: {
                                color: styles.theme.textSecondary
                            },
                            children: methodology
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisResults.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AnalysisResults.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2f$SharedComponents$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-lg font-semibold mb-3 flex items-center gap-2",
                        style: {
                            color: styles.theme.textPrimary
                        },
                        children: "ℹ️ Analysis Metadata"
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: styles.theme.textSecondary
                                        },
                                        children: "Completed: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: styles.theme.textPrimary
                                        },
                                        children: timestamp
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: styles.theme.textSecondary
                                        },
                                        children: "Version: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: styles.theme.textPrimary
                                        },
                                        children: version
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AnalysisResults.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AnalysisResults.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AnalysisResults;
}),
"[project]/app/components/SurveyExplorer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/context/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AnalysisParametersForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AnalysisParametersForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AnalysisResults$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AnalysisResults.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/utils/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
// ============================================================================
// MAIN SURVEY EXPLORER COMPONENT
// ============================================================================
const SurveyExplorerApp = ()=>{
    const [analysisResult, setAnalysisResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const handleAnalyze = async (formData)=>{
        setLoading(true);
        setValidationErrors({});
        try {
            // Create input text with survey parameters
            const input_text = `Survey Analysis Request: ${formData.surveyName} (${formData.surveyYear})`;
            // Prepare options object for Django backend
            const options = {
                survey_name: formData.surveyName,
                survey_year: formData.surveyYear,
                analysis_type: formData.analysisType,
                min_responses: formData.minResponses,
                confidence_level: formData.confidence,
                question_filter: formData.questionFilter || ''
            };
            // Call Django backend API
            const backendResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeText"])(input_text, options);
            // Transform backend response to frontend AnalysisResult format
            const analysisResult = {
                id: backendResult.id,
                title: `${formData.surveyName} Analysis for ${formData.surveyYear}`,
                confidence: Math.round((backendResult.confidence || 0) * 100),
                factors: backendResult.explanation_json?.top_factors || [],
                latency: backendResult.latency_ms || 0,
                timestamp: new Date(backendResult.created_at || new Date()).toLocaleString(),
                version: '2.1.0',
                summary: backendResult.explanation_json?.summary || backendResult.result,
                insights: backendResult.explanation_json?.insights || [],
                methodology: `Analysis conducted using ${formData.analysisType} approach with ${formData.confidence}% confidence level.`,
                dataQuality: backendResult.explanation_json?.dataQuality
            };
            setAnalysisResult(analysisResult);
        } catch (error) {
            console.error('Analysis failed:', error);
            setValidationErrors({
                general: error instanceof Error ? error.message : 'Analysis failed. Please try again.'
            });
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-30",
                style: {
                    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    animation: 'float 6s ease-in-out infinite'
                }
            }, void 0, false, {
                fileName: "[project]/app/components/SurveyExplorer.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/components/SurveyExplorer.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "px-8 pb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AnalysisParametersForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onAnalyze: handleAnalyze,
                                loading: loading,
                                validationErrors: validationErrors
                            }, void 0, false, {
                                fileName: "[project]/app/components/SurveyExplorer.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            analysisResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AnalysisResults$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                result: analysisResult
                            }, void 0, false, {
                                fileName: "[project]/app/components/SurveyExplorer.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SurveyExplorer.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SurveyExplorer.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/SurveyExplorer.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SurveyExplorer.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SurveyExplorer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SurveyExplorerApp, {}, void 0, false, {
            fileName: "[project]/app/components/SurveyExplorer.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/SurveyExplorer.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SurveyExplorer;
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SurveyExplorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/SurveyExplorer.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SurveyExplorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__361967ea._.js.map