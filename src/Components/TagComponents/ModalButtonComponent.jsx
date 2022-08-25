export default function ModalButtonComponent(props) {
    return (
        <button className={`
        px-4 py-1 rounded-full ml-8 text-2xl text-mainColor bg-white-50
        `}onClick={props.onClick} hidden={props.hidden}
        >{props.children}</button>
    )
}