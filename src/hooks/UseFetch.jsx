import { useEffect, useState } from "react";

export const useFetch=(url)=>{
    const [data,setData]=useState(null)
    const[pading,setPading]=useState(false)
    const[error,setError]=useState(null)


    useEffect(()=>{
     
        const getData  = async ()=>{
            setPading(true)
            
    
        try {
            const req =await fetch(url)
            if(!req.ok){
               throw new Error(req.statusTextz) 
            }
            const data=await req.json()
                setData(data)
                setPading(false)
                setError(null)
        } catch (err) {
            setPading(false)
            setError(err)
            console.log(err);
        }
        }
        getData()
    },[url])

    return{data,pading,error}
}
 
