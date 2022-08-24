import Modal from 'react-modal'
import React, { useState } from "react"
import create from "../functions/create";

export default function () {

    const [modalIsOpen, setIsOpen] = useState(false);

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

    return (
        <>
        <button onClick={() => openModal()}>Adicionar Usuario</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <form action="">
                <p>Adicione as informações para criar um usuario</p>
                <input type="text" name="name" placeholder="nome" required onChange={getName}/>
                <input type="text" name="email" placeholder="email" required onChange={getEmail}/>
                <button type="submit" onClick={() => create(namevalue, emailvalue)}>Criar Usuario</button>
            </form>
            <button onClick={closeModal}>close</button>
        </Modal>
        </>
    )
}