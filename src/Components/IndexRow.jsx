export default function IndexRow(params) {

    const printresposta = params.printresposta

    return (
        <div className={`

        `}>
            <div className={`
                text-textColor text-3xl
            `}>{printresposta.name}</div>
        </div>
    )
}