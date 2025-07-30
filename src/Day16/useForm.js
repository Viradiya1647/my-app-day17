import { useState } from 'react'
export default function useForm(initialValues,validate){
    const[values,setValues] = useState(initialValues)
    const[errors,setErrors] = useState({})
 
    const handleChange=(e)=>{
        const{name,value} = e.target
        const newValues = {...values,[name]:value}
        setValues(newValues)
        if(validate){
            const validationErrors = validate(newValues)
            setErrors(validationErrors)
        }
    }
    const handleSubmit = (callback) => (e) => {
        e.preventDefault()
        const validationErrors = validate(values)
        setErrors(validationErrors)
        if(Object.keys(validationErrors).length===0){
            callback()
            setValues(initialValues)
        }
    }
    return { values, errors, handleChange, handleSubmit }
}  