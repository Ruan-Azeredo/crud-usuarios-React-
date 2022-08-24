import Modal from 'react-modal'
import React, { useState, useEffect } from "react"
import update from '../functions/update';

export default function UpdateModel(printresposta) {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({})

    const [namevalue, setNamevalue] = useState()
    const [emailvalue, setEmailvalue] = useState()


    const openModal = () => {
        setIsOpen(true);
    }
    
    const closeModal = () => {
        setIsOpen(false)
    }

    const getName = (event) => setNamevalue(event.target.value)
    const getEmail = (event) => setEmailvalue(event.target.value)

    const getArray = (info) => {
        const id = info.printresposta.id
        const name = info.printresposta.name
        const email = info.printresposta.email

        setData({ id, name, email })
        openModal()
    }

    return (
        <>
            <button onClick={() => getArray(printresposta)}>Update</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} data={data}>
                <div>
                    <input defaultValue={data.name} onChange={getName}></input>
                    <input defaultValue={data.email} onChange={getEmail}></input>
                </div>
                    <button
                        onClick={() => update(data, namevalue, emailvalue)}>Submit</button>
                <button onClick={closeModal}>close</button>
            </Modal>
        </>
    )
}