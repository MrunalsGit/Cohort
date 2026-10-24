export default async function ({params}){
    const {slug} = await params 
    // const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    // const data = await resp.json()
    return <div>
        {slug}
        <br/>
        {/* {JSON.stringify(data.title)}
        <br/>
        {JSON.stringify(data.id)} */}

    </div>
}