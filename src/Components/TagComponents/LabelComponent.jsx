export default function LabelComponent(props) {
    return (
        <div className={`border-mainColor border-2 p-2 rounded-2xl mx-20 my-10`}
            hidden={props.hidden}
        ><div className={`bg-white-100 text-mainColor text-xl h-3
                        flex relative top-[-20px] left-5 w-20 pl-3`}>
            {props.title}
        </div>{props.children}</div>
    )
}