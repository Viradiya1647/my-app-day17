import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function FromYUP(){
    const shema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
    })
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(shema)
    })
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input {...register("email")} />
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div>
                <label>password</label>
                <input type='password' {...register("password")} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}


