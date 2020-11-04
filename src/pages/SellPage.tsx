import React, { useState } from 'react';
import { FaBarcode, FaMinus, FaPlus } from 'react-icons/fa';

import '../styles/pages/sellPage.css';
import Sidebar from '../components/Sidebar';
import Ticket from '../components/Ticket';

function SellPage() {
    const [quantity, setQuantity] = useState(1);
    const [idProcutSelected, setIdProcutSelected] = useState([] as Number[]);
    const [quantityProductSelected, setQuantityProductSelected] = useState([] as Number[]);

    const itens = [
        {
            id: 1,
            name: "Coca Café",
            price: 5.5
        },
        {
            id: 2,
            name: "Energético",
            price: 10
        }
    ]

    function addQuantity() {
        const cont = quantity + 1;

        setQuantity(cont);
    }

    function removeQuantity() {
        if (quantity > 1) {
            const cont = quantity - 1;

            setQuantity(cont);
        }
    }

    function addProduct(id: Number) {
        setIdProcutSelected([...idProcutSelected, id]);
        setQuantityProductSelected([...quantityProductSelected, quantity]);
    }

    return (
        <div className="container-fluid col-8" id="sellPage">
            <div className="row">
                <Sidebar showMenu={true} showUser={true} msgLogout={"SAIR DO PDV"} optionEnabled={{ searchTag: true, sellTag: true, operationTag: false, configurationTag: false }} />

                <div className="col">
                    <div className="row" id="filterProduct">
                        <div className="col-3" id="amountItem">
                            <div className="btn-group-vertical">
                                <button className="addItem" onClick={addQuantity}><FaPlus color="#fff" /></button>
                                <button className="removeItem" onClick={removeQuantity}><FaMinus color="#fff" /></button>
                            </div>

                            <span className="quantityItem">{quantity},000</span>
                        </div>

                        <div className="col-8" id="formFilter">
                            <form>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><FaBarcode size={28} color="#fff" /></div>
                                    </div>
                                    <input type="text" name="nameProduct" className="form-control" id="nameProduct" placeholder="Adicionar o Produto" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div id="categoryProduct">
                        <p>CATEGORIAS</p>

                        <div className="row" id="gridCategory">
                            <div className="col">
                                <div className="card categoryProduct">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card categoryProduct">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card categoryProduct">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card categoryProduct">
                                    <button>&nbsp;</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="itemProduct">
                        <p>PRODUTOS</p>

                        <div className="row" id="gridProduct">
                            <div className="col">
                                <div className="card productItem">
                                    <button onClick={() => addProduct(itens[0].id)}>{itens[0].name}</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button onClick={() => addProduct(itens[1].id)}>{itens[1].name}</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>
                        </div>

                        <div className="row" id="gridProduct">
                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>
                        </div>

                        <div className="row" id="gridProduct">
                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>
                        </div>

                        <div className="row" id="gridProduct">
                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>
                        </div>

                        <div className="row" id="gridProduct">
                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>
                        </div>

                        <div className="row" id="gridProduct">
                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>
                        </div>

                        <div className="row" id="gridProduct">
                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>
                        </div>

                        <div className="row" id="gridProduct">
                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card productItem">
                                    <button>&nbsp;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Ticket idsProducts={idProcutSelected} quantityProduct={quantityProductSelected} />
            </div>
        </div>
    )
}

export default SellPage