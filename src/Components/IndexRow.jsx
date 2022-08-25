export default function IndexRow(params) {

    const printresposta = params.printresposta

    return (
        <div className="infos-box-content">
            <div className="infos-content name">{printresposta.name}</div>
            <div className="infos-content email">{printresposta.email}</div>
        </div>
    )
}