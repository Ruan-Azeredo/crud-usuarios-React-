export default function IdComponent(params) {
    console.log(params.show)
    return (
        <div
            className={`
                bg-mainColor text-white-50 justify-center px-8 py-3 rounded-lg text-xl text-secondFont flex self-start my-14 mx-auto ${params.show}
            `}
        >ID: {params.value}</div>
    )
}