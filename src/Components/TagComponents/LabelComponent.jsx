export default function LabelComponent(props) {
    return (
        <div className={`border-mainColor border-2 p-2 rounded-2xl mx-20 my-10`}
            hidden={props.hidden}
        >{props.children}</div>
    )
}