import Modal from 'react-modal'
import React, { useState } from "react"

export default function ShowModal(printresposta) {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({})

    const openModal = () => {
        setIsOpen(true);
    }
    
    const closeModal = () => {
        setIsOpen(false)
    }

    const getArray = (info) => {
        const id = info.printresposta.id
        const name = info.printresposta.name
        const email = info.printresposta.email

        setData({ id, name, email })
        openModal()
    }

    return (
        <>
            <button onClick={() => getArray(printresposta)}>Info</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} data={data}>
                <div>
                    <input defaultValue={data.name} disabled></input>
                    <input defaultValue={data.email} disabled></input>
                    <input value={data.id} disabled/>
                </div>
                <button onClick={closeModal}>close</button>
            </Modal>
        </>
    )
}