import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineKey } from 'react-icons/hi';
import { FaSync } from 'react-icons/fa';

import '../styles/pages/landingPage.css';
import Sidebar from '../components/Sidebar';
import BannerImage from '../images/banner.jpg';

export default function LandingPage() {
    return (
        <div className="container-fluid col-8" id="landing-page">
            <div className="row">
                <Sidebar showMenu={false} showUser={false} msgLogout={"IR AO ERP"} optionEnabled={{ searchTag: true, sellTag: true, operationTag: false, configurationTag: false }} />

                <div className="col-6" id="content">
                    <p className="h1" id="title-market">mercadinhossk</p>

                    <form id="formLogin">
                        <div className="form-group">
                            <label htmlFor="usernameInput">USUÁRIO (LOGIN OU E-MAIL)</label>
                            <input type="text" name="usernameInput" id="usernameInput" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="passwordInput">SENHA</label>
                            <input type="password" name="passwordInput" id="passwordInput" className="form-control" />
                        </div>

                        <Link to="/loginPage">
                            <button type="button" className="btnLogin">
                                <HiOutlineKey color="#fff" size={42} /> ENTRAR
                            </button>
                        </Link>
                    </form>

                    <footer>
                        <button type="button" className="btnSync">
                            <FaSync color="#005AFF" size={42} />
                            <p>SINCRONIZAR</p>
                        </button>

                        <p>
                            Clique aqui para realizar a atualização de seus
                            <br />
                            dados armazenados no MarketUP
                        </p>
                    </footer>
                </div>

                <div className="col-1"></div>

                <div className="col-3" id="banner">
                    <img src={BannerImage} alt="BannerImage" />
                </div>
            </div>
        </div>
    )
}