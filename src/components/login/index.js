import React from 'react';
import './estilo.css'; 
import rocketImage from '../../img/Maintenance-cuate.png';


function LoginPage() {
    return (
        <div className="main-login">
            <div className="left-login">
                <h1>Faça login e realize sua Requisição de Manutenção de Software!</h1>
                <img className="img" src={rocketImage} alt="Rocket" />
            </div>
            <div className="right-login">
                <div className="card-login">
                    <h1>Login</h1>
                    <div className="text-field">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" name="usuario" placeholder="Usuário" />
                    </div>
                    <div className="text-field">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="Senha" placeholder="Senha" />
                    </div>
                    <button className="btn-login">Login</button>
                    <p>Não possui uma conta? Cadastre-se</p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
