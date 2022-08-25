import React, { useState, useEffect } from "react"
import IndexRow from "../Components/IndexRow";
import ModalTemplate from "../Components/ModalTemplate";
const axios = require('axios');

export default function Layout() {

    const [buscaapi, setBuscaapi] = useState()

    useEffect(() => {
        axios.get("http://localhost:3001/users/all")
        .then((response) => setBuscaapi(response.data))
    }, [])

    return (
        <div className={
            `bg-gradient-to-r from-mainColor to-secondColor pt-[2%]`
        }>
            <div className={`text-mainColor bg-white-100 w-[10%] py-[1%]  justify-center font-IriaSans flex text-3xl`}>USERS</div>
            <div className={`bg-white-100 px-[5%] min-h-screen h-full`}>
                <div className={`pb-[1%] pt-[3%]`}>
                    <ModalTemplate acao='create' />
                </div>
                {buscaapi?.map(printresposta => (
                    <div key={printresposta.id}
                        className={`
                            bg-white-50 mt-6 flex justify-between py-6 px-12
                        `}>
                        <IndexRow printresposta={printresposta} />
                        <div>
                            <ModalTemplate printresposta={printresposta} acao='info' />
                            <ModalTemplate printresposta={printresposta} acao='update' />
                            <ModalTemplate printresposta={printresposta} acao='delete' />
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-6 left-20 flex bg-white-100">
                    <span className={`text-textColor text-xl`}>Feito com &#9829; por </span><span className={`text-mainColor font-bold text-xl`}>Ruan Azeredo</span>
                </div>
        </div>
    )
}