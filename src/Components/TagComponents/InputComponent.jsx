export default function InputComponent(params) {
    
    return (
        <input
            className={`
                bg-white-50 p-4 rounded-2xl focus:outline-none text-textColor text-2xl w-[550px]
            `}
            defaultValue={params.defaultValue}
            onChange={params.onChange}
            disabled={params.disabled}
            hidden={params.hidden}
        />
    )
}