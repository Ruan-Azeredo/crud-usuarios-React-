import React, { useState, useEffect } from "react"
import ModalTemplate from "../Components/ModalTemplate";
const axios = require('axios');

export default function Layout() {

    const [buscaapi, setBuscaapi] = useState()

    // const [namevalue, setNamevalue] = useState()
    // const [emailvalue, setEmailvalue] = useState()

    // useEffect(() => {
    //     axios.get("https://viacep.com.br/ws/29934738/json/")
    //         .then((response) => setBuscaapi(response.data))
    // }, [])

    // return (
    //     <div>
    //         <p>{buscaapi?.cep}</p>
    //     </div>
    // ) // API PEGANDO A INFOS QUANDO EXISTE APENAS 1 OBJETO

    useEffect(() => {
        axios.get("http://localhost:3001/users/all")
        .then((response) => setBuscaapi(response.data))
    }, [])

    return (
        <div>
            <div>
            <ModalTemplate acao='create' />
            </div>
            {buscaapi?.map(printresposta => (
                <li key={printresposta.id}>
                    <div className="infos-box-content">
                        <div className="infos-content name">{printresposta.name}</div>
                        <div className="infos-content email">{printresposta.email}</div>
                    </div>
                    <ModalTemplate printresposta={printresposta} acao='info' />
                    <ModalTemplate printresposta={printresposta} acao='update' />
                    <ModalTemplate printresposta={printresposta} acao='delete' />
                </li>
            ))}
        </div> // API PEGANDO INFO PERCORRENDO ENTRE OBJETOS
    )
}