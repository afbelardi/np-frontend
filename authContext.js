import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

export const AuthContext = createContext({});

// export function useAuth() {
//     return useContext(AuthContext);
// }

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null)



    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setUser(null)
    }

    const value = {
        isLoggedIn,
        logout,
        setIsLoggedIn,
        user,
        setUser
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
