import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

// export function useAuth() {
//     return useContext(AuthContext);
// }

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true)
        }   
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    }

    const value = {
        isLoggedIn,
        logout,
        setIsLoggedIn
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
