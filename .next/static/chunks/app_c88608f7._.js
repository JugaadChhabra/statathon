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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2f$SharedComponents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/shared/SharedComponents.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// ============================================================================
// HEADER COMPONENT
// ============================================================================
const Header = ()=>{
    _s();
    const { isDark, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyles"])(isDark);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-[100] p-6 backdrop-blur-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2f$SharedComponents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
            style: {
                padding: '2rem'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-6xl rounded-3xl p-2 flex items-center justify-center shadow-2xl",
                                style: {
                                    background: isDark ? 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)' : 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                                    boxShadow: isDark ? '0 8px 32px rgba(139, 92, 246, 0.3)' : '0 8px 32px rgba(59, 130, 246, 0.2)'
                                },
                                children: "📊"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "m-0 text-5xl font-black leading-tight tracking-tighter",
                                        style: {
                                            fontFamily: "'Inter', -apple-system, sans-serif",
                                            ...styles.gradientText,
                                            textShadow: isDark ? '0 2px 4px rgba(0, 0, 0, 0.3)' : 'none'
                                        },
                                        children: "Survey Explorer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 mb-0 text-lg font-semibold tracking-wide",
                                        style: {
                                            color: isDark ? '#94a3b8' : '#64748b',
                                            fontFamily: "'Inter', -apple-system, sans-serif"
                                        },
                                        children: "Professional Data Analytics Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Header.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleTheme,
                        className: "w-[70px] h-[70px] rounded-3xl flex items-center justify-center text-3xl cursor-pointer transition-all duration-500 ease-out border-2 border-white/20",
                        style: {
                            background: isDark ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'linear-gradient(135deg, #3b82f6, #6366f1)',
                            boxShadow: isDark ? '0 8px 32px rgba(139, 92, 246, 0.4)' : '0 8px 32px rgba(59, 130, 246, 0.3)'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.transform = 'scale(1.1) rotate(180deg)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                        },
                        children: isDark ? '☀️' : '🌙'
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Header.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/Header.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Header.tsx",
        lineNumber: 16,
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
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './ThemeContext'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './SharedComponents'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/utils/styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const AnalysisParametersForm = (param)=>{
    let { onSubmit, loading } = param;
    _s();
    const { isDarkMode } = useTheme();
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyles"])(isDarkMode);
    // Form state management
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        surveyName: '',
        surveyYear: 2024,
        questionFilter: '',
        minResponses: 100,
        analysisType: 'summary',
        confidence: 95
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [activeField, setActiveField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
            onSubmit(formData);
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
    const FormField = (param)=>{
        let { label, children, error, icon } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    style: styles.label,
                    className: "flex items-center gap-2",
                    children: [
                        icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg",
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 82,
                            columnNumber: 18
                        }, ("TURBOPACK compile-time value", void 0)),
                        label
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 81,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputValidation, {
                    error: error
                }, void 0, false, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
            lineNumber: 80,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Enhanced stats cards
    const StatsCard = (param)=>{
        let { title, value, icon, color } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.statsCard,
            className: "group hover:scale-105 transition-all duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium",
                            style: {
                                color: styles.theme.textSecondary
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 102,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl",
                            style: {
                                color
                            },
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 105,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 101,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-2xl font-bold",
                    style: {
                        color: styles.theme.textPrimary
                    },
                    children: value
                }, void 0, false, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 107,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
            lineNumber: 97,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.dashboardContainer,
        className: "min-h-screen p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.glassmorphCard(styles.theme.accent.primary, 'elevated'),
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold mb-4",
                            style: styles.gradientText,
                            children: "Survey Analysis Configuration"
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg",
                            style: {
                                color: styles.theme.textSecondary
                            },
                            children: "Configure your survey analysis parameters with precision and ease"
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCard, {
                            title: "Available Surveys",
                            value: "12",
                            icon: "📊",
                            color: styles.theme.accent.primary
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCard, {
                            title: "Total Responses",
                            value: "2.4M",
                            icon: "👥",
                            color: styles.theme.accent.success
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCard, {
                            title: "Analysis Models",
                            value: "8",
                            icon: "🧠",
                            color: styles.theme.accent.secondary
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsCard, {
                            title: "Confidence",
                            value: "".concat(formData.confidence, "%"),
                            icon: "✨",
                            color: styles.theme.accent.warning
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.glassmorphCard(styles.theme.accent.primary),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl",
                                            children: "🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold",
                                            style: {
                                                color: styles.theme.textPrimary
                                            },
                                            children: "Survey Selection"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                            label: "Survey Dataset",
                                            icon: "📋",
                                            error: errors.surveyName,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select a survey..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "canadian-community-health",
                                                        children: "Canadian Community Health Survey"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "census-2021",
                                                        children: "Canadian Census 2021"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "labour-force",
                                                        children: "Labour Force Survey"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "general-social",
                                                        children: "General Social Survey"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "youth-smoking",
                                                        children: "Youth Smoking Survey"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                            label: "Survey Year",
                                            icon: "📅",
                                            error: errors.surveyYear,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
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
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: 2024,
                                                        children: "2024"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: 2023,
                                                        children: "2023"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: 2022,
                                                        children: "2022"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: 2021,
                                                        children: "2021"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: 2020,
                                                        children: "2020"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.glassmorphCard(styles.theme.accent.secondary),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl",
                                            children: "⚙️"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold",
                                            style: {
                                                color: styles.theme.textPrimary
                                            },
                                            children: "Analysis Parameters"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                            label: "Analysis Type",
                                            icon: "🎯",
                                            error: errors.analysisType,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
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
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "summary",
                                                        children: "Summary Statistics"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "correlation",
                                                        children: "Correlation Analysis"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "regression",
                                                        children: "Regression Analysis"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "clustering",
                                                        children: "Cluster Analysis"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "trend",
                                                        children: "Trend Analysis"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                            label: "Minimum Responses",
                                            icon: "📊",
                                            error: errors.minResponses,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.glassmorphCard(styles.theme.accent.success),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl",
                                    children: "🔬"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    style: {
                                        color: styles.theme.textPrimary
                                    },
                                    children: "Advanced Configuration"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                    label: "Question Filter",
                                    icon: "🔍",
                                    error: errors.questionFilter,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                    label: "Confidence Level",
                                    icon: "📈",
                                    error: errors.confidence,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "90",
                                                max: "99",
                                                value: formData.confidence,
                                                onChange: (e)=>handleInputChange('confidence', parseInt(e.target.value)),
                                                className: "w-full h-2 rounded-lg appearance-none cursor-pointer",
                                                style: {
                                                    background: "linear-gradient(to right, ".concat(styles.theme.accent.success, " 0%, ").concat(styles.theme.accent.success, " ").concat((formData.confidence - 90) / 9 * 100, "%, ").concat(styles.theme.cardBorder, " ").concat((formData.confidence - 90) / 9 * 100, "%, ").concat(styles.theme.cardBorder, " 100%)")
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                style: {
                                                    color: styles.theme.textSecondary
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "90%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        lineNumber: 320,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "99%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                                lineNumber: 318,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.glassmorphCard(null, 'elevated'),
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedButton, {
                                onClick: ()=>{},
                                loading: loading,
                                className: "text-lg px-12 py-4",
                                style: styles.primaryButton,
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 341,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Analyzing Data..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 340,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🚀"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                            lineNumber: 346,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Start Analysis"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                    lineNumber: 345,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-sm",
                            style: {
                                color: styles.theme.textMuted
                            },
                            children: "Analysis typically takes 30-60 seconds depending on dataset size"
                        }, void 0, false, {
                            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AnalysisParametersForm.tsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/AnalysisParametersForm.tsx",
            lineNumber: 115,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/AnalysisParametersForm.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnalysisParametersForm, "peOCwP5V5cyrOLUS3IDSzT7IzHM=", false, function() {
    return [
        useTheme
    ];
});
_c = AnalysisParametersForm;
const __TURBOPACK__default__export__ = AnalysisParametersForm;
var _c;
__turbopack_context__.k.register(_c, "AnalysisParametersForm");
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
                title: "".concat(formData.survey, " Analysis for ").concat(formData.year),
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
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/components/SurveyExplorer.tsx",
                        lineNumber: 80,
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
                                lineNumber: 83,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            analysisResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AnalysisResults$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                result: analysisResult
                            }, void 0, false, {
                                fileName: "[project]/app/components/SurveyExplorer.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SurveyExplorer.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SurveyExplorer.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: "\n        @keyframes float {\n          0%, 100% { transform: translateY(0px); }\n          50% { transform: translateY(-20px); }\n        }\n        \n        @keyframes spin {\n          0% { transform: rotate(0deg); }\n          100% { transform: rotate(360deg); }\n        }\n        \n        * {\n          box-sizing: border-box;\n        }\n        \n        body {\n          margin: 0;\n          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;\n        }\n      "
            }, void 0, false, {
                fileName: "[project]/app/components/SurveyExplorer.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SurveyExplorer.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SurveyExplorerApp, "r0TLw2zKqwMnBEI2jzZNbWyifi0=");
_c = SurveyExplorerApp;
const SurveyExplorer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SurveyExplorerApp, {}, void 0, false, {
            fileName: "[project]/app/components/SurveyExplorer.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/SurveyExplorer.tsx",
        lineNumber: 121,
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
}]);

//# sourceMappingURL=app_c88608f7._.js.map