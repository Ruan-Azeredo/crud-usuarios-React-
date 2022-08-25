export default function AvisoDeleteComponent(props) {
    return (
        <div className={`
            ${props.hidden} text-textColor flex justify-center p-20 text-2xl
        `}>Tem certeza que deseja deletar este Usuario?</div>
    )
}