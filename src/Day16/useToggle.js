import { useState } from 'react'
export default function useToggle(initialValue = false){
    const[value,setValue] = useState(initialValue)
    const toggle=()=>setValue(val=>!val)
    const setTrue=()=>setValue(true)  
    const setFalse=()=>setValue(false)  
    return {value,toggle,setTrue,setFalse}
}