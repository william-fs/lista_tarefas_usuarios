import { useEffect, useState } from "react";

import { auth } from "../fireBaseConnection";
import { onAuthStateChanged } from "firebase/auth";

import {Navigate} from "react-router-dom";

import { ReactNode } from 'react';

interface PrivateProps {
    children: ReactNode;
}

const Private: React.FC<PrivateProps> = ({ children }) => {
    
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        async function checkLogin() {
            onAuthStateChanged(auth, (user) => {
                // se tem usuario logado 
                if(user) {
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                    }

                    localStorage.setItem("@detailUser", JSON.stringify(userData));

                    setLoading(false);
                    setSigned(true);

                } else {
                    // Não tem usuário logado 
                    setLoading(false);
                    setSigned(false);
                }
            })
        }

        checkLogin();
    }, [])

    if(loading) {
        return (
            <div></div>
        )
    }

    if(!signed) {
        return <Navigate to="/" />
    }
    
    return children;
}

export default Private;