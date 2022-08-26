import React, { useState } from "react"
import update from '../functions/update';
import create from "../functions/create";
import deletes from '../functions/deletes';
import InputComponent from './TagComponents/InputComponent';
import IdComponent from './TagComponents/IdComponent';
import ButtonComponent from './TagComponents/ButtonComponent';
import LabelComponent from './TagComponents/LabelComponent';
import ModalComponent from './TagComponents/ModalComponent';
import FooterModalComponent from './TagComponents/FooterModalComponent';
import ModalButtonComponent from './TagComponents/ModalButtonComponent';
import TitleModalComponent from './TagComponents/TitleModalComponent';
import AvisoDeleteComponent from './TagComponents/AvisoDeleteComponent';
import ContentButtonsComponent from "./TagComponents/ContentButtonsComponent";
import { customStyles } from "../constants/customStyles";

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
            <ButtonComponent
                onClick={acao != 'create' ? () => getArray(params) : () => openModal()}
                value={acao.toUpperCase()}
            ></ButtonComponent>

            <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} data={data} style={customStyles}>

                <TitleModalComponent value={acao.toUpperCase()} hidden={acao != 'delete' ? null : 'hidden'} />
                
                <ContentButtonsComponent>

                    <div>

                        <LabelComponent hidden={acao == 'delete' ? true : false} title={'NAME'}>
                        <InputComponent
                                defaultValue={acao == 'update' || 'info' ? data.name : null}
                                onChange={acao == 'update' || 'create' ? getName : null}
                                disabled={acao == 'info' ? true : false}
                                hidden={acao == 'delete' ? true : false}
                            />
                        </LabelComponent>

                        <LabelComponent hidden={acao == 'delete' ? true : false} title={'EMAIL'}>
                            <InputComponent
                                defaultValue={acao == 'update' || 'info' ? data.email : null}
                                onChange={acao == 'update' || 'create' ? getEmail : null}
                                disabled={acao == 'info' ? true : false}
                                hidden={acao == 'delete' ? true : false}
                            />
                        </LabelComponent>

                    </div>

                    <IdComponent value={data.id} show={data.id && acao != 'delete' ? null : 'hidden'}/>
                    
                </ContentButtonsComponent>

                <AvisoDeleteComponent hidden={acao == 'delete' ? null : 'hidden'} />
                
                <FooterModalComponent>

                    <ModalButtonComponent
                        onClick={() => create(namevalue, emailvalue)}
                        hidden={acao == 'create' ? false : true}
                    >CREATE USER</ModalButtonComponent>

                    <ModalButtonComponent
                        onClick={() => update(data, namevalue, emailvalue)}
                        hidden={acao == 'update' ? false : true}
                    >UPDATE USER</ModalButtonComponent>

                    <ModalButtonComponent
                        onClick={() => deletes(data)}
                        hidden={acao == 'delete' ? false : true}
                    >DELETE</ModalButtonComponent>

                    <ModalButtonComponent onClick={closeModal}>CLOSE</ModalButtonComponent>

                </FooterModalComponent>

            </ModalComponent>
        </>
    )
}