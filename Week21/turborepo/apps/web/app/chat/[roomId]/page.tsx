interface ParamsType{
    params : Promise<{roomId : string}>
}

export default async function ({params} : ParamsType){
    const roomId = (await params).roomId
    return (
        <div>
            Hellow your room id is {roomId}
        </div>
    )
}