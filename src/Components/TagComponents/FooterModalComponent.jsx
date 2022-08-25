export default function FooterModalComponent(props) {
    return (
        <div className={`
            h-20 bg-gradient-to-r from-mainColor to-secondColor flex flex-row justify-end content-center py-5 px-20
        `}
        >{props.children}</div>
    )
}