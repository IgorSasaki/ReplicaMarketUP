import React, { useEffect, useState } from 'react';
import { FiClock, FiLogOut, FiSearch, FiShoppingBag } from 'react-icons/fi';
import { VscSettingsGear, VscSymbolProperty } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import '../styles/components/sidebar.css';

interface propsSidebar {
    showMenu: Boolean,
    showUser: Boolean,
    msgLogout: String
    optionEnabled: {
        searchTag: Boolean,
        sellTag: Boolean,
        operationTag: Boolean,
        configurationTag: Boolean
    }
}

export default function Sidebar({ showMenu, showUser, msgLogout, optionEnabled }: propsSidebar) {
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [dayOfWeek, setdayOfWeek] = useState('');

    useEffect(() => {
        setDate(new Date().toLocaleDateString());
        generateDayofWeek();

        let timerID = setInterval(() => tick(), 100);

        return function cleanup() {
            clearInterval(timerID);
        };
    }, []);

    function tick() {
        var hour = new Date().toLocaleTimeString()
        var hourSplit = [];

        hourSplit = hour.split(":")

        setTime(`${hourSplit[0]}:${hourSplit[1]}`);
    }

    function generateDayofWeek() {
        const dayOfWeek = ["DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"];

        var d = new Date();

        setdayOfWeek(dayOfWeek[d.getDay()]);
    }

    return (
        <div className="col-2 text-center" id="sidebar">
            <ul className="nav flex-column">
                <li className="nav-item" id="logoTag">
                    <span className="nav-link" id="logo">MarketUp</span>
                </li>

                <li className="nav-item opacity" id="curretDateTag">
                    <span className="nav-link" id="dayOfWeek">{dayOfWeek}</span>
                    <span className="nav-link" id="todayDate">{date}</span>
                </li>

                <li className="nav-item" id="currentTimeTag">
                    <span className="nav-link" id="currentTime"><FiClock color="#fff" /> {time}</span>
                </li>

                <li className="nav-item" id="pdvStatusTag">
                    <span className="nav-link opacity" id="pdvNumber">PDV 1</span>
                    <span className="nav-link" id="pdvStatus">ONLINE</span>
                </li>


                {
                    showUser ? (
                        <li className="nav-item" id="autenticationTag">
                            <span className="nav-link opacity" id="adm">ADMINISTRADOR</span>
                            <span className="nav-link" id="user">ADMIN</span>
                        </li>
                    ) : null
                }

                <li className="nav-item" id="logoutTag">
                    <Link to="/">
                        <button className="nav-link" id="logout">
                            <FiLogOut size={15} color="#fff" /> {msgLogout}
                        </button>
                    </Link>
                </li>

                {
                    showMenu ? (
                        <div className="menu-link">
                            <li className={optionEnabled.searchTag ? "nav-item" : "nav-item disabled"} id="searchTag">
                                <button className="nav-link align-middle" id="searchPage">
                                    <FiSearch size={32} color="#fff" />
                                    <p>PROCURAR</p>
                                </button>
                            </li>
                            <li className={optionEnabled.sellTag ? "nav-item selected" : "nav-item disabled"} id="sellTag">
                                <button className="nav-link" id="sellPage">
                                    <FiShoppingBag size={32} color="#fff" />
                                    <p>VENDER</p>
                                </button>
                            </li>
                            <li className={optionEnabled.operationTag ? "nav-item" : "nav-item disabled"} id="operationTag">
                                <button disabled={true} className="nav-link" id="operationPage">
                                    <VscSettingsGear size={32} color="#fff" />
                                    <p>OPERAÇÕES</p>
                                </button>
                            </li>
                            <li className={optionEnabled.configurationTag ? "nav-item" : "nav-item disabled"} id="configurationTag">
                                <button disabled={true} className="nav-link" id="configurationPage">
                                    <VscSymbolProperty size={32} color="#fff" />
                                    <p>CONFIGURAÇÕES</p>
                                </button>
                            </li>
                        </div>
                    ) : null
                }

            </ul>
        </div>
    )
}