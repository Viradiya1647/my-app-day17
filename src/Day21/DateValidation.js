import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod' 

const zObject = z.object({
    startDate: z.string()
    .nonempty("start date is rewuired."),
    endDate: z.string()
    .nonempty("end date is required."),
})
.refine(
    (data) => {
        const start = new Date(data.startDate)
        const end = new Date(data.endDate)
        return end > start
    },
    {
        message: "end date must be after start date.",
        path: ["endDate"],
    }
)

export default function DateValidation () {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(zObject)
    })
    const onSubmit = (data) => {
        console.log("date date: ",data)
        alert("submitted.")
        reset()
    }
    return(
        <div>
            <h3>Date Validation....</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="date" {...register("startDate")} />
                {errors.startDate && <p>{errors.startDate.message}</p>}

                <input type="date" {...register("endDate")} />
                {errors.endDate && <p>{errors.endDate.message}</p>}

                <button type="submit">Submit</button>                
            </form>
        </div>
    )
}