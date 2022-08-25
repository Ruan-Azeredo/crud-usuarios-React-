export default function ButtonComponent(params) {
    
    return (
        <button
            className={`
                bg-gradient-to-r from-mainColor to-secondColor text-white-50 px-4 py-1 
                rounded-full ml-8 text-2xl
            `}
            onClick={params.onClick}
            hidden={params.hidden}

        >{params.value}</button>
    )
}