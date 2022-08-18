import React, { useState, useEffect } from "react"
const axios = require('axios');

export default function Layout() {

    const [buscaapi, setBuscaapi] = useState()

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
            {buscaapi?.map(printresposta => (
                <li key={printresposta.id}>
                    <div>{printresposta.name}</div>
                </li>
            ))}
        </div> // API PEGANDO INFO PERCORRENDO ENTRE OBJETOS
    )
}