import Modal from 'react-modal'
import React, { useState } from "react"
import deletes from '../functions/deletes';

export default function DeleteWarning(printresposta) {

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
        <button onClick={() => getArray(printresposta)}>Delete</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <p>Tem certeza que deseja deletar este Usuario?</p>
            <button onClick={() => deletes(data)}>Deletar</button>
            <button onClick={closeModal}>Não Deletar</button>
        </Modal>
        </>
    )
}