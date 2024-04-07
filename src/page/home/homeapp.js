import React, { useState } from 'react';
import './estiloHome.css'; 
import ifamlogo from "../../img/ifam-logo.png";
import Header from '../../components/header';
import BreadCrumb from '../../components/breadCrumb';
import Form from '../../components/form/form';

function HomeApp() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            <nav className={sidebarOpen ? "sidebar" : "sidebar close"}>
                <header>
                    <div className="image-text">
                        <span className="image">
                        <img src={ifamlogo} alt="Rocket" />
                            {/*<img src="logo.png" alt="">*/}
                        </span>

                        <div className="text logo-text">
                            <span className="name">IFAM</span>
                            <span className="profession">R. de Manutenção</span>
                        </div>
                    </div>

                    <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">

                        <ul className="menu-links">
                            <li className="nav-link">
                                <a className='' href="./home/homeapp.js">
                                    <i className='bx bx-home-alt icon'></i>
                                    <span className="text nav-text">Home</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-copy-alt icon'></i>
                                    <span className="text nav-text">Requisição</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-tag-alt icon'></i>
                                    <span className="text nav-text">Classificação</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-search-alt icon'></i>
                                    <span className="text nav-text">Análise</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-bar-chart-alt-2 icon'></i>
                                    <span className="text nav-text">Projeto</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-code-alt icon'></i>
                                    <span className="text nav-text">Implementação</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-cube-alt icon'></i>
                                    <span className="text nav-text">Testes</span>
                                </a>
                            </li>

                            <li className="active nav-link">
                                <a href="../../usuarios/index.js">
                                    <i className='bx bx-user icon'></i>
                                    <span className="text nav-text">Usuários</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="bottom-content">
                        <li>
                            <a href="#">
                                <i className='bx bx-log-out icon'></i>
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>

                    </div>
                </div>
            </nav>
            <section className="home">
                <header>
                    <Header/>
                </header>
                <div>
                    <BreadCrumb/>
                </div>
                <div>
                    <div>
                        <Form/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomeApp;
