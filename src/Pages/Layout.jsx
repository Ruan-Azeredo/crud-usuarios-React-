import React, { useState, useEffect } from "react"
import UpdateModel from '../Components/UpdateModel';
import create from "../functions/create";
const axios = require('axios');

export default function Layout() {

    const [buscaapi, setBuscaapi] = useState()

    const [namevalue, setNamevalue] = useState()
    const [emailvalue, setEmailvalue] = useState()

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

    const getName = (event) => setNamevalue(event.target.value)
    const getEmail = (event) => setEmailvalue(event.target.value)

    return (
        <div>
            <div>
                <form action="">
                    <p>Adicione as informações para criar um usuario</p>
                    <input type="text" name="name" placeholder="nome" required onChange={getName}/>
                    <input type="text" name="email" placeholder="email" required onChange={getEmail}/>
                    <button type="submit" onClick={() => create(namevalue, emailvalue)}>Criar Usuario</button>
                </form>
            </div>
            {buscaapi?.map(printresposta => (
                <li key={printresposta.id}>
                    <div className="infos-box-content">
                        <div className="infos-content name">{printresposta.name}</div>
                        <div className="infos-content email">{printresposta.email}</div>
                    </div>
                    <UpdateModel printresposta={printresposta}/>
                </li>
            ))}
        </div> // API PEGANDO INFO PERCORRENDO ENTRE OBJETOS
    )
}