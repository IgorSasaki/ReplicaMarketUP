import React, { useState } from 'react';
import { FaUserCircle, FaTrashAlt, FaEdit } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

import '../styles/components/ticket.css';

interface propsTicket {
    idsProducts: Number[],
    quantityProduct: Number[]
}

export default function Ticket({ idsProducts, quantityProduct }: propsTicket) {
    const [total, setTotal] = useState(0);

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

    function totalSum(price: Number){
       const subTotal = Number(total) + Number(price); 

        setTotal(subTotal);
    }

    return (
        <div className="col-4" id="ticket">
            <header>
                <div className="row">
                    <div className="col-6" id="identification">
                        <p style={{ padding: 0, margin: 0 }}>Ao Consumidor <FaEdit color="#fff" /></p>
                        <p style={{ padding: 0, margin: 0 }} className="identUser">IGOR SASAKI <FaUserCircle color="#87C336" /></p>
                    </div>

                    <div className="col"></div>

                    <div className="col-4" id="itensOption">
                        <div className="row">
                            <div className="col text-right">
                                <p style={{ padding: 0, margin: 0, fontWeight: "bolder" }}>0</p>
                                <p style={{ padding: 0, margin: 0 }}>Itens</p>
                            </div>
                            <div className="col">
                                <FaTrashAlt color="#fff" size={38} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="row" id="content">
                {
                    itens
                        .filter((product, index) => product.id === idsProducts[index])
                        .map((product, index) => (
                            <div className="container" id="lineProduct">
                                <div className="row" id="valueProduct">
                                    <div className="col">
                                        <span>{quantityProduct[index]} x {product.price}</span>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col">
                                        <span>R$ {product.price}</span>
                                    </div>
                                </div>

                                <div className="row" id="describeProduct">
                                    <div className="col">
                                        <p>{product.name}</p>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col">
                                        <p className="font-weight-bolder">R${Number(quantityProduct[index]) * Number(product.price)}</p>
                                        {/* {totalSum(Number(quantityProduct[index]) * Number(product.price))} */}
                                    </div>
                                </div>

                                <hr style={{ margin: 0 }} />
                            </div>
                        ))
                }
            </div>

            <footer>
                <div className="row" id="totalSale">
                    <div className="col">
                        <p>SUBTOTAL <span>R$ {total}</span></p>
                        <p>DESCONTOS <span>R$ 0</span></p>
                        <p>PAGAMENTOS <span>R$ 0</span></p>
                    </div>

                    <div className="col text-center">
                        <p className="totalText">TOTAL A PAGAR</p>

                        <p className="totalSale">R$ <span className="realText">{total}</span></p>
                    </div>
                </div>

                <div className="row" id="titleSell">
                    <div className="col">
                        <GiReceiveMoney size={62} />
                    </div>

                    <div className="col align-middle">
                        <p className="title-sell ">VENDENDO...</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}