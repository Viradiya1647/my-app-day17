import { useEffect, useState } from "react";


export const useOnlineStatuse=()=>{
    const [online,setOnline] = useState(
         typeof window !== "undefined" ? window.navigator.onLine:true 
    )
    useEffect(()=>{
        const handleStatus = () =>{
            setOnline(navigator.onLine)
        }
        window.addEventListener("online",handleStatus)
        window.addEventListener("offline",handleStatus)
        return()=>{ 
            window.removeEventListener("online",handleStatus)
            window.removeEventListener("offline",handleStatus)
        }
    },[])
    return online
}
