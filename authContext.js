import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import jwt, { decode } from "jsonwebtoken";

export const AuthContext = createContext({});

// export function useAuth() {
//     return useContext(AuthContext);
// }

export const AuthProvider = ({ children }) => {
    let decodedToken = null;
    let token = null;
    if (typeof window !== 'undefined') {
        token = localStorage.getItem('token')
        decodedToken = token ? jwt.decode(token) : null;
      }
    
    const [isLoggedIn, setIsLoggedIn] = useState(!!decodedToken);
    const [user, setUser] = useState(null);

    

    useEffect(() => {
        const userId = decodedToken ? decodedToken.userId : null;
        if (userId) {
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
    }, [decodedToken, token]);

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
