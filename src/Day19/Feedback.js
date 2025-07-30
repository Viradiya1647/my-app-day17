// Task 2: Validate a Contact Form Submission
// Description:
// Fields: name, email, message.
// name and message must be non-empty.
// email must be a valid email format.
// Use when: Handling a contact/feedback form on your website.

import { yupResolver  } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required("name nust be non-empty."),
    message: yup.string().required("feedbak nust be non-empty."),
    email: yup.string().email("invalid email format").required("email nust be not empty.")
})

export default function Feedback(){
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors,}
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log("form data: ",data)
        reset()
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>

            <input placeholder="give your feedbake here..." {...register("message")} />
            {errors.message && <p>{errors.message.message}</p>}

            <input placeholder="name" {...register("name")} />
            {errors.name && <p>{errors.name.message}</p>}

            <input placeholder="email" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}

            <button type="submit">Submit</button>
        </form>
    )
}