import Modal from 'react-modal'
import React, { useState } from "react"
import update from '../functions/update';
import create from "../functions/create";
import deletes from '../functions/deletes';

export default function ModalTemplate(params) {

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

    const acao = params.acao

    return (
        <>
            <button onClick={acao != 'create' ? () => getArray(params) : () => openModal()}>{acao}</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} data={data}>
                <div>
                    <input className='input-name'
                        defaultValue={acao == 'update' || 'info' ? data.name : null}
                        onChange={acao == 'update' || 'create' ? getName : null}
                        disabled={acao == 'info' ? true : false}
                        hidden={acao == 'delete' ? true : false}
                    />

                    <input className='input-email'
                        defaultValue={acao == 'update' || 'info' ? data.email : null}
                        onChange={acao == 'update' || 'create' ? getEmail : null}
                        disabled={acao == 'info' ? true : false}
                        hidden={acao == 'delete' ? true : false}
                    />

                    <input className='input-id'
                        value={acao == 'update' || 'info' ? data.id : null}
                        hidden={data.id && acao != 'delete' ? false : true}
                        disabled/>
                    
                </div>
                <p hidden={acao == 'delete' ? false : true}>Tem certeza que deseja deletar este Usuario?</p>
                <button
                    onClick={() => create(namevalue, emailvalue)}
                    hidden={acao == 'create' ? false : true}
                >Criar Usuario</button>

                <button
                    onClick={() => update(data, namevalue, emailvalue)}
                    hidden={acao == 'update' ? false : true}
                >Atualizar Usuario</button>

                <button
                    onClick={() => deletes(data)}
                    hidden={acao == 'delete' ? false : true}
                >Deletar</button>

                <button onClick={closeModal}>close</button>
            </Modal>
        </>
    )
}