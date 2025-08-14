(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/context/ThemeContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeProvider": ()=>ThemeProvider,
    "useTheme": ()=>useTheme
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    isDark: false,
    toggleTheme: ()=>{}
});
const useTheme = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
};
_s(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const ThemeProvider = (param)=>{
    let { children } = param;
    _s1();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleTheme = ()=>{
        setIsDark((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
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
_s1(ThemeProvider, "YMdA/jj6uQ3ZonSeYUReGs0SHUY=");
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/utils/styles.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
        glassmorphCard: function() {
            let glowColor = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, variant = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'default';
            const actualGlow = glowColor || theme.cardGlow;
            const variants = {
                default: {
                    transform: 'translateY(0)',
                    boxShadow: isDark ? "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px ".concat(theme.cardBorder, ", 0 0 20px ").concat(actualGlow, "20") : "0 8px 32px rgba(59, 130, 246, 0.15), 0 0 0 1px ".concat(theme.cardBorder, ", 0 0 20px ").concat(actualGlow, "15")
                },
                elevated: {
                    transform: 'translateY(-2px)',
                    boxShadow: isDark ? "0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px ".concat(theme.cardBorder, ", 0 0 30px ").concat(actualGlow, "30") : "0 20px 40px rgba(59, 130, 246, 0.2), 0 0 0 1px ".concat(theme.cardBorder, ", 0 0 30px ").concat(actualGlow, "25")
                },
                flat: {
                    transform: 'translateY(0)',
                    boxShadow: isDark ? "0 4px 16px rgba(0, 0, 0, 0.3), 0 0 0 1px ".concat(theme.cardBorder) : "0 4px 16px rgba(59, 130, 246, 0.1), 0 0 0 1px ".concat(theme.cardBorder)
                }
            };
            return {
                background: theme.cardBg,
                border: "1px solid ".concat(theme.cardBorder),
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
            border: "2px solid ".concat(isDark ? 'rgba(99, 102, 241, 0.3)' : 'rgba(59, 130, 246, 0.3)'),
            background: theme.cardBg,
            color: theme.textPrimary,
            fontSize: '1rem',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            outline: 'none',
            fontFamily: "'Inter', -apple-system, sans-serif",
            fontWeight: '500',
            boxShadow: isDark ? "inset 0 2px 4px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(99, 102, 241, 0.2)" : "inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(59, 130, 246, 0.2)"
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
            border: "1px solid ".concat(theme.cardBorder),
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
            border: "1px solid ".concat(theme.cardBorder),
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/utils/styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// ============================================================================
// ADMIN DASHBOARD HEADER
// ============================================================================
const Header = ()=>{
    _s();
    const { isDark, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyles"])(isDark);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 backdrop-blur-xl border-b",
        style: {
            borderColor: styles.theme.cardBorder,
            background: styles.theme.cardBg
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold",
                                        style: styles.gradientText,
                                        children: "Survey Explorer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full animate-pulse",
                                        style: {
                                            background: styles.theme.accent.success
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleTheme,
                                className: "p-3 rounded-xl transition-all duration-300 hover:scale-105",
                                style: {
                                    background: styles.theme.cardBg,
                                    border: "1px solid ".concat(styles.theme.cardBorder),
                                    color: styles.theme.textPrimary,
                                    boxShadow: isDark ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.1)'
                                },
                                title: "Switch to ".concat(isDark ? 'light' : 'dark', " mode"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold",
                                style: {
                                    background: styles.theme.gradients.secondary,
                                    color: styles.theme.textPrimary,
                                    border: "2px solid ".concat(styles.theme.cardBorder)
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
_s(Header, "r7S/iip9RxifvRUYc8CwwLPqz2s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/AnalysisParametersForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/app/components/AnalysisParametersForm.tsx'\n\n'import', and 'export' cannot be used outside of module code");
e.code = 'MODULE_UNPARSABLE';
throw e;
}}),
"[project]/app/components/shared/SharedComponents.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FormField": ()=>FormField,
    "GlassCard": ()=>GlassCard,
    "LoadingSpinner": ()=>LoadingSpinner,
    "StatusBadge": ()=>StatusBadge
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/utils/styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const GlassCard = (param)=>{
    let { children, style = {}, glowColor = null, onHover = true } = param;
    _s();
    const { isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyles"])(isDark);
    const cardStyle = {
        ...styles.glassmorphCard(glowColor),
        ...style
    };
    const handleMouseEnter = (e)=>{
        if (!onHover) return;
        const actualGlow = glowColor || (isDark ? '#6d28d9' : '#3b82f6');
        const element = e.currentTarget;
        element.style.transform = 'translateY(-4px) scale(1.01)';
        element.style.boxShadow = isDark ? "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(148, 163, 184, 0.2), 0 0 30px ".concat(actualGlow, "30") : "0 20px 40px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5), 0 0 30px ".concat(actualGlow, "25");
    };
    const handleMouseLeave = (e)=>{
        if (!onHover) return;
        const actualGlow = glowColor || (isDark ? '#6d28d9' : '#3b82f6');
        const element = e.currentTarget;
        element.style.transform = 'translateY(0) scale(1)';
        element.style.boxShadow = isDark ? "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(148, 163, 184, 0.1), 0 0 20px ".concat(actualGlow, "20") : "0 8px 32px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3), 0 0 20px ".concat(actualGlow, "15");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: cardStyle,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(GlassCard, "p8LwrWNaEMX2B6gWWkmgIiuCFNw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = GlassCard;
const FormField = (param)=>{
    let { label, children, error = null } = param;
    _s1();
    const { isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyles"])(isDark);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: styles.label,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/shared/SharedComponents.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children,
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s1(FormField, "p8LwrWNaEMX2B6gWWkmgIiuCFNw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c1 = FormField;
const LoadingSpinner = (param)=>{
    let { size = '20px' } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
};
_c2 = LoadingSpinner;
const StatusBadge = (param)=>{
    let { isValid, validText = "Ready", invalidText = "Missing fields" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        children: isValid ? "✅ ".concat(validText) : "⚠️ ".concat(invalidText)
    }, void 0, false, {
        fileName: "[project]/app/components/shared/SharedComponents.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = StatusBadge;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "GlassCard");
__turbopack_context__.k.register(_c1, "FormField");
__turbopack_context__.k.register(_c2, "LoadingSpinner");
__turbopack_context__.k.register(_c3, "StatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/AnalysisResults.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/utils/styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2f$SharedComponents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/shared/SharedComponents.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// ============================================================================
// ANALYSIS RESULTS COMPONENT
// ============================================================================
const AnalysisResults = (param)=>{
    let { result } = param;
    _s();
    const { isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyles"])(isDark);
    // Handle empty/undefined data gracefully
    if (!result) return null;
    const { title = 'Analysis Results', confidence = 0, factors = [], latency = 0, timestamp = new Date().toLocaleString(), version = '1.0.0' } = result;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2f$SharedComponents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
        style: {
            marginBottom: '2rem'
        },
        glowColor: isDark ? '#10b981' : '#059669',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "m-0 mb-6 text-2xl font-bold flex items-center gap-3",
                style: {
                    fontFamily: "'Inter', -apple-system, sans-serif",
                    ...styles.gradientText,
                    textShadow: isDark ? '0 2px 4px rgba(0, 0, 0, 0.5)' : 'none'
                },
                children: "ℹ️ Analysis Details"
            }, void 0, false, {
                fileName: "[project]/app/components/AnalysisResults.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-6 flex-wrap gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "m-0 text-xl font-semibold flex-1 leading-snug",
                        style: {
                            fontFamily: "'Inter', -apple-system, sans-serif",
                            color: isDark ? '#f1f5f9' : '#1e293b'
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-3 rounded-3xl text-sm font-bold backdrop-blur-xl border border-white/20",
                        style: {
                            background: isDark ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'linear-gradient(135deg, #3b82f6, #6366f1)',
                            color: 'white',
                            fontFamily: "'Inter', -apple-system, sans-serif",
                            boxShadow: isDark ? '0 8px 24px rgba(139, 92, 246, 0.4)' : '0 8px 24px rgba(59, 130, 246, 0.3)'
                        },
                        children: [
                            confidence,
                            "% Confidence"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AnalysisResults.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            factors && factors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: "text-lg font-semibold mb-4 flex items-center gap-2",
                        style: {
                            fontFamily: "'Inter', -apple-system, sans-serif",
                            color: isDark ? '#f1f5f9' : '#1e293b'
                        },
                        children: "🎯 Key Factors"
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3",
                        children: factors.map((factor, index)=>{
                            // Handle case where factor might be null/undefined
                            if (!factor) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-4 py-2 rounded-3xl text-sm font-semibold border",
                                style: {
                                    background: isDark ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(168, 139, 250, 0.3))' : 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.25))',
                                    color: isDark ? '#c4b5fd' : '#4f46e5',
                                    fontFamily: "'Inter', -apple-system, sans-serif",
                                    borderColor: isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(59, 130, 246, 0.3)',
                                    backdropFilter: 'blur(8px)'
                                },
                                children: factor
                            }, "factor-".concat(index), false, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 99,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AnalysisResults.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 rounded-2xl border",
                style: {
                    background: isDark ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.4), rgba(30, 41, 59, 0.4))' : 'linear-gradient(135deg, rgba(248, 250, 252, 0.6), rgba(255, 255, 255, 0.6))',
                    borderColor: isDark ? 'rgba(148, 163, 184, 0.2)' : 'rgba(203, 213, 225, 0.3)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                        className: "text-base font-semibold mb-3 flex items-center gap-2",
                        style: {
                            fontFamily: "'Inter', -apple-system, sans-serif",
                            color: isDark ? '#f1f5f9' : '#1e293b'
                        },
                        children: "📊 Analysis Metadata"
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium block",
                                        style: {
                                            color: isDark ? '#94a3b8' : '#64748b',
                                            fontFamily: "'Inter', -apple-system, sans-serif"
                                        },
                                        children: "Response Time:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        style: {
                                            color: isDark ? '#f1f5f9' : '#1e293b',
                                            fontFamily: "'Inter', -apple-system, sans-serif"
                                        },
                                        children: [
                                            latency,
                                            "ms"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium block",
                                        style: {
                                            color: isDark ? '#94a3b8' : '#64748b',
                                            fontFamily: "'Inter', -apple-system, sans-serif"
                                        },
                                        children: "Generated:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        style: {
                                            color: isDark ? '#f1f5f9' : '#1e293b',
                                            fontFamily: "'Inter', -apple-system, sans-serif"
                                        },
                                        children: timestamp
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium block",
                                        style: {
                                            color: isDark ? '#94a3b8' : '#64748b',
                                            fontFamily: "'Inter', -apple-system, sans-serif"
                                        },
                                        children: "Version:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        style: {
                                            color: isDark ? '#f1f5f9' : '#1e293b',
                                            fontFamily: "'Inter', -apple-system, sans-serif"
                                        },
                                        children: version
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AnalysisResults.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AnalysisResults.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AnalysisResults.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AnalysisResults.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AnalysisResults.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnalysisResults, "p8LwrWNaEMX2B6gWWkmgIiuCFNw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = AnalysisResults;
const __TURBOPACK__default__export__ = AnalysisResults;
var _c;
__turbopack_context__.k.register(_c, "AnalysisResults");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/SurveyExplorer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/context/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AnalysisParametersForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AnalysisParametersForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AnalysisResults$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AnalysisResults.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// ============================================================================
// MAIN SURVEY EXPLORER COMPONENT
// ============================================================================
const SurveyExplorerApp = ()=>{
    _s();
    const [analysisResult, setAnalysisResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const handleAnalyze = async (formData)=>{
        setLoading(true);
        setValidationErrors({});
        try {
            // Simulate API call with timeout
            await new Promise((resolve)=>setTimeout(resolve, 2000));
            // Mock analysis result
            const mockResult = {
                title: "".concat(formData.surveyName, " Analysis for ").concat(formData.surveyYear),
                confidence: Math.floor(Math.random() * 30) + 70,
                factors: [
                    'Economic factors',
                    'Geographic distribution',
                    'Age demographics',
                    'Employment trends',
                    'Educational levels'
                ].slice(0, Math.floor(Math.random() * 3) + 2),
                latency: Math.floor(Math.random() * 1000) + 500,
                timestamp: new Date().toLocaleString(),
                version: '1.0.0'
            };
            setAnalysisResult(mockResult);
        } catch (error) {
            console.error('Analysis failed:', error);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-30",
                style: {
                    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    animation: 'float 6s ease-in-out infinite'
                }
            }, void 0, false, {
                fileName: "[project]/app/components/SurveyExplorer.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/components/SurveyExplorer.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "px-8 pb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AnalysisParametersForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onAnalyze: handleAnalyze,
                                loading: loading,
                                validationErrors: validationErrors
                            }, void 0, false, {
                                fileName: "[project]/app/components/SurveyExplorer.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            analysisResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AnalysisResults$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                result: analysisResult
                            }, void 0, false, {
                                fileName: "[project]/app/components/SurveyExplorer.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SurveyExplorer.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SurveyExplorer.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: "\n        @keyframes float {\n          0%, 100% { transform: translateY(0px); }\n          50% { transform: translateY(-20px); }\n        }\n        \n        @keyframes spin {\n          0% { transform: rotate(0deg); }\n          100% { transform: rotate(360deg); }\n        }\n        \n        * {\n          box-sizing: border-box;\n        }\n        \n        body {\n          margin: 0;\n          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;\n        }\n      "
            }, void 0, false, {
                fileName: "[project]/app/components/SurveyExplorer.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SurveyExplorer.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SurveyExplorerApp, "r0TLw2zKqwMnBEI2jzZNbWyifi0=");
_c = SurveyExplorerApp;
const SurveyExplorer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SurveyExplorerApp, {}, void 0, false, {
            fileName: "[project]/app/components/SurveyExplorer.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/SurveyExplorer.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = SurveyExplorer;
const __TURBOPACK__default__export__ = SurveyExplorer;
var _c, _c1;
__turbopack_context__.k.register(_c, "SurveyExplorerApp");
__turbopack_context__.k.register(_c1, "SurveyExplorer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SurveyExplorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/SurveyExplorer.tsx [app-client] (ecmascript)");
'use client';
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SurveyExplorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_49c01f7a._.js.map