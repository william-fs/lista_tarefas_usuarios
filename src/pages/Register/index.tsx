import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
// CSS herdado do HOME 

import { auth } from "../../fireBaseConnection.ts";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailInputRef = useRef<HTMLInputElement>(null);

    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(email !== "" && password !== "") {
            await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/admin", {replace: true})
            })
            .catch(() => {
                alert("Erro ao criar usuário!")
            })
        } else {
            alert("Digite email e senha");
            if (emailInputRef.current) {
                emailInputRef.current.focus();
            }
        }
    }

    return(
        <div className='home-container'>
            <h1>Cadastre-se</h1>
            <span>Gerencie sua agenda de forma fácil</span>

            <form onSubmit={handleRegister} className='form'>
                <input 
                    type="text" 
                    placeholder='Digite seu E-mail' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    ref={emailInputRef}
                />

                <input 
                    type="password" 
                    placeholder='Digite seua Senha' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit'>Cadastrar</button>
            </form>

            <Link to={"/"} className='button-link'>
                Já possui uma conta? Faça o login!
            </Link>
        </div>
    )
}
export default Register;