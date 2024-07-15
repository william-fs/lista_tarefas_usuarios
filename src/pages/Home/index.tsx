import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './Home.scss';

function Home() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailInputRef = useRef<HTMLInputElement>(null);

    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(email !== "" && password !== "") {
            alert("Logado");
        } else {
            alert("Digite email e senha");
            if (emailInputRef.current) {
                emailInputRef.current.focus();
            }
        }
    }

    return(
        <div className='home-container'>
            <h1>Lista de Tarefas Usuários</h1>
            <span>Gerencie sua agenda de forma fácil</span>

            <form onSubmit={handleLogin} className='form'>
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

                <button type='submit'>Acessar</button>
            </form>

            <Link to={"/register"} className='button-link'>
                Não possui uma conta? Cadastre-se.
            </Link>
        </div>
    )
}
export default Home;