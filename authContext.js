import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import jwt, { decode } from "jsonwebtoken";
import BASE_URL from "./utils/baseUrl";
import { useRouter } from "next/router";

export const AuthContext = createContext({});



export const AuthProvider = ({ children }) => {
    let decodedToken = null;
    let token = null;
    if (typeof window !== 'undefined') {
        token = localStorage.getItem('token')
        decodedToken = token ? jwt.decode(token) : null;
      }
    
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(!!decodedToken);
    const [user, setUser] = useState(null);
    const userId = decodedToken ? decodedToken.userId : null;
    

    useEffect(() => {
        if (userId) {
            (async () => {
                try {
                    const response =  await axios.get(`${BASE_URL}/api/users/${userId}`, {
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
    }, [token]);

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setUser(null);
        router.push('/login?toast=success');
    }

    const value = {
        isLoggedIn,
        logout,
        setIsLoggedIn,
        user,
        setUser,
        userId,
        token
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
