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

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true)
    
            const decodedToken = jwt.decode(token);
            const userId = decodedToken.userId;
            (async () => {
                try {
                    const response =  await axios.get(`http://localhost:8000/api/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }   
                })
                const data = await response.data;
                setUser(data);
                } catch (error) {
                    console.error(error)
                }
            })()
        }   
    }, [isLoggedIn]);

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
