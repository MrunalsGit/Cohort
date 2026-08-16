import {useState, useEffect} from "react"

export function useFetch(url){
    const [data, setData] = useState({});
    const [loading,setLoad] = useState(true);

    async function getData(){
        setLoad(true);
        const val = await fetch(url)
        const resp = await val.json()
        setData(resp);

        setLoad(false);
    }

    useEffect(()=>{
        getData();
    },[url])

    useEffect(()=>{
        const timer = setInterval(getData, 3000)

        return ()=>{
            clearInterval(timer)
        }
    },[])

    return {data, loading};
}