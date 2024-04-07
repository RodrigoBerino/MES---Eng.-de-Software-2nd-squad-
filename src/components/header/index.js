import React from "react";
import './estiloHeader.css'

function Header (){
    return(
        <div className="header">
            <h1 className="logo">Usuários</h1>
            <div className="header-right">
                <a href="#contact">Sobre</a>
                <a href="#about">Suporte</a>
            </div>
        </div>
    );
}

export default Header