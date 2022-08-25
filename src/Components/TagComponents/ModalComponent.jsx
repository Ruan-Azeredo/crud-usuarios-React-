import Modal from 'react-modal'

export default function ModalComponent(props) {
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            data={props.data}
            style={props.style}>{props.children}</Modal>
 )
}