import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { Jwt } from "jsonwebtoken";

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
        }   
        const decodedToken = jwt.decode(token);
        const userId = decodedToken.userId;
        (async () => {
            const response = axios.get(`http://localhost:8000/api/user/${userId}`, {
                Authorization: `Bearer ${token}`
            })
            const data = response.data;
            console.log(data)
        })
        
     
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
