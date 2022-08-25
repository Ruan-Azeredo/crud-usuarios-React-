export default function TitleModalComponent(props) {
    return (
        <div className={`
            text-textColor flex text-3xl font-IriaSans mt-12 mb-5 ml-20 ${props.hidden}
        `}>{props.value}</div>
    )
}