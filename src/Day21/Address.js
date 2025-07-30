import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const zObject = z.object({
    address: z.object({
        street: z.string().nonempty("street is required."),
        city: z.string().nonempty("city is required."),
        zip: z.string().regex(/^\d{5}/,"zip must be exatly 5 digits."),
    }),
})

export default function Address  () {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm ({
        resolver: zodResolver(zObject)
    })
    const onSubmit = (data) => {
        console.log("address data: ",data)
        alert("address saved.")
        reset()
    }
    return(
        <div>
            <form 
                onSubmit={handleSubmit(onSubmit)}
            >
                <input placeholder='street' {...register("address.street")} />
                {errors.address?.street && <p>{errors.address.street.message}</p>}

                <input placeholder='city' {...register("address.city")} />
                {errors.address?.city && <p>{errors.address.city.message}</p>}

                <input placeholder='zip' {...register("address.zip")} />
                {errors.address?.zip && <p>{errors.address.zip.message}</p>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}








// sk 6: Validate an Address Form
// Description:
// Nested object: address { street, city, zip }.
// All fields are required.
// zip must be 5 digits.
// Use when: User enters shipping or billing address.