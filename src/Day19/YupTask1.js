// Task 1: Validate a User Login Form
// Description:
// Ensure that the email field is not empty and is a valid email format.
// Ensure the password field has at least 6 characters.
// Use when: A user is logging in to your platform.

import { useForm  } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

const yupObject = yup.object().shape({
    email: yup.string().email("invalid email.").required("email is required."),
    password: yup.string()
    .required("password is reuired.")
    .min(8,"password must be atleast 8 characters")
    .matches(/[a-z]/,"password must contain atleast one lowercase letter.")
    .matches(/[A-Z]/,"password must contain atleast one uppercase letter.")
    .matches(/\d/,"password must contain atleast one number.")
    .matches(/[!@#$%^&*(),.?":{}|<>]/,"password must contain atleast one special chareacter.")
})

export default function YupTask1(){

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(yupObject)
    })

    const onSubmit = (data) => {
        console.log("data entered: ",data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                

                <input placeholder="email" {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}

                <input placeholder="age" {...register("password")} />
                {errors.password && <p>{errors.password.message}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}