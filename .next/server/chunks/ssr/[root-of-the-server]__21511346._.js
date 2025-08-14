module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/components/utils/api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// API utilities for Django backend integration
__turbopack_context__.s({
    "analyzeText": ()=>analyzeText,
    "getAnalyses": ()=>getAnalyses,
    "getCurrentUser": ()=>getCurrentUser,
    "getHealth": ()=>getHealth,
    "getStoredUser": ()=>getStoredUser,
    "getSurveyDatasets": ()=>getSurveyDatasets,
    "isAuthenticated": ()=>isAuthenticated,
    "login": ()=>login,
    "logout": ()=>logout,
    "refreshToken": ()=>refreshToken,
    "register": ()=>register
});
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8000/api/v1") || 'http://localhost:8000';
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
        const token = localStorage.getItem('access_token');
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        };
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }
        console.log('Making API request to:', `${API_BASE_URL}/analysis/analyze/`);
        console.log('Request data:', requestData);
        const response = await fetch(`${API_BASE_URL}/analysis/analyze/`, {
            method: "POST",
            headers,
            body: JSON.stringify(requestData)
        });
        if (!response.ok) {
            if (response.status === 401) {
                // Try to refresh token
                const refreshed = await refreshToken();
                if (refreshed) {
                    return analyzeText(input_text, options); // Retry with new token
                }
                throw new Error('Authentication required');
            }
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
        const response = await fetch(`${API_BASE_URL}/analysis/analyses/`, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch analyses: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching analyses:', error);
        return [];
    }
}
async function getHealth() {
    try {
        const response = await fetch(`${API_BASE_URL}/analysis/health/`, {
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
async function getSurveyDatasets() {
    try {
        const response = await fetch(`${API_BASE_URL}/analysis/survey-datasets/`, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch datasets: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching datasets:', error);
        return [
            {
                id: "housing-expenditure",
                name: "Housing expenditure dataset",
                file: "LEVEL - 05 ( Sec 5 & 6).csv"
            }
        ];
    }
}
async function login(credentials) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Login failed: ${response.status}`);
        }
        const data = await response.json();
        // Store tokens in localStorage
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        localStorage.setItem('user', JSON.stringify(data.user));
        return data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}
async function register(userData) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/register/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Registration failed: ${response.status}`);
        }
        const data = await response.json();
        // Store tokens in localStorage
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        localStorage.setItem('user', JSON.stringify(data.user));
        return data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
}
async function logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
}
async function getCurrentUser() {
    try {
        const token = localStorage.getItem('access_token');
        if (!token) return null;
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/profile/`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        if (!response.ok) {
            if (response.status === 401) {
                // Token expired, try to refresh
                const refreshed = await refreshToken();
                if (refreshed) {
                    return getCurrentUser(); // Retry with new token
                }
                logout(); // Clear invalid tokens
                return null;
            }
            throw new Error(`Failed to get user profile: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error getting current user:', error);
        return null;
    }
}
async function refreshToken() {
    try {
        const refresh = localStorage.getItem('refresh_token');
        if (!refresh) return false;
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/token/refresh/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                refresh
            })
        });
        if (!response.ok) {
            logout(); // Clear invalid tokens
            return false;
        }
        const data = await response.json();
        localStorage.setItem('access_token', data.access);
        return true;
    } catch (error) {
        console.error('Error refreshing token:', error);
        logout(); // Clear invalid tokens
        return false;
    }
}
function getStoredUser() {
    try {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
        console.error('Error parsing stored user:', error);
        return null;
    }
}
function isAuthenticated() {
    return !!localStorage.getItem('access_token');
}
}),
"[project]/app/components/context/AuthContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AuthProvider": ()=>AuthProvider,
    "useAuth": ()=>useAuth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/utils/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        initializeAuth();
    }, []);
    const initializeAuth = async ()=>{
        try {
            // Check if user is stored locally
            const storedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredUser"])();
            if (storedUser && (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAuthenticated"])()) {
                setUser(storedUser);
                // Verify with server
                const currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                if (currentUser) {
                    setUser(currentUser);
                } else {
                    setUser(null);
                }
            }
        } catch (error) {
            console.error('Auth initialization error:', error);
            setUser(null);
        } finally{
            setIsLoading(false);
        }
    };
    const handleLogin = async (credentials)=>{
        try {
            setIsLoading(true);
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["login"])(credentials);
            setUser(response.user);
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        } finally{
            setIsLoading(false);
        }
    };
    const handleRegister = async (userData)=>{
        try {
            setIsLoading(true);
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["register"])(userData);
            setUser(response.user);
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        } finally{
            setIsLoading(false);
        }
    };
    const handleLogout = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logout"])();
            setUser(null);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };
    const refreshUser = async ()=>{
        try {
            const currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            setUser(currentUser);
        } catch (error) {
            console.error('Refresh user error:', error);
            setUser(null);
        }
    };
    const value = {
        user,
        isLoading,
        isAuthenticated: !!user,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
        refreshUser
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/context/AuthContext.tsx",
        lineNumber: 103,
        columnNumber: 10
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__21511346._.js.map