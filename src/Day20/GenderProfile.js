import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const yupObject = yup.object().shape({
    age: yup
    .number()
    .required("required.")
    .min(18,"age must be 18 or above.")
    .max(100,"age must be 100 or below."),
    gender: yup
    .string()
    .required("required.")
    .oneOf(['male','female','other'],"select valid gender."),
})


export default function GenderProfile () {
    const {
        reset,
        register,
        handleSubmit,
        formState: {errors},
    } = useForm ({ resolver: yupResolver(yupObject) })

     const onSubmit = (data) => {
        console.log("gender data: ",data)
        alert("submitted.")
        reset()
     }

    return(
        <div>
            <h4>GenderProfileSetup</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="number" placeholder="age" {...register("age")} />
                {errors.age && <p>{errors.age.message}</p>}

                <select {...register("gender")}>
                    <option value="">select gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                </select>
                {errors.gender && <p>{errors.gender.message}</p>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
