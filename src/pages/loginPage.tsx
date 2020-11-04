import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/loginPage.css';
import Sidebar from '../components/Sidebar';
import BannerImage from '../images/banner.jpg';

export default function LoginPage() {
    return (
        <div className="container-fluid col-8" id="login-page">
            <div className="row">
                <Sidebar 
                showMenu={true} 
                showUser={true} 
                msgLogout={"SAIR DO PDV"} 
                optionEnabled={{searchTag: true,sellTag: true,operationTag: true,configurationTag: false}}/>

                <div className="col-6" id="content">
                    <p className="h1" id="title-box">CAIXA ABERTO</p>
                    <p className="h3" id="title-client">PRÓXIMO CLIENTE</p>

                    <form id="formLogin">
                        <div className="form-group">
                            <label htmlFor="salesmanInput">VENDEDOR:</label>
                            <select name="salesmanInput" id="salesmanInput" className="form-control">
                                <option>Não Informado</option>
                                <option>Igor Sasaki</option>
                            </select>
                        </div>

                        <Link to="/sellPage">
                            <button type="button" className="btnLogin">
                                INICIAR CUPOM
                            </button>
                        </Link>
                    </form>

                    <footer>
                        <div className="row">
                            <div className="col-3" id="helpButoon">
                                <span><button className="buttonShortcut">F1</button></span>
                                <p>HELP CONTENDO AS TECLAS DE ATALHO</p>
                            </div>

                            <div className="col-1"></div>

                            <div className="col-3" id="fullScreenButoon">
                                <span><button className="buttonShortcut">F11</button></span>
                                <p>UTILIZAR O PDV EM MODO TELA CHEIA</p>
                            </div>
                        </div>
                    </footer>
                </div>

                <div className="col-3" id="banner">
                    <img src={BannerImage} alt="BannerImage" />
                </div>
            </div>
        </div >
    )
}