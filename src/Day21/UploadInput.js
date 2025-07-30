import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod'
 
const zObject = z.object({
    file: z
    .any()
    .refine((file)=>file && file.length===1,"file is required.")
    .refine((file)=>file && ['application/pdf','image/jpeg','image/jpg'].includes(file[0]?.type),"only PDF, jpg and jpeg alllowed.")
    .refine((file)=>file && file[0]?.size <= 2 * 1024 * 1024, "file should not larger than 2MB."),
})

export default function UploadInput () {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm ({
        resolver: zodResolver(zObject)
    })
    const onSubmit = (data) => {
        console.log("uploaded file: ",data)
        alert("document uploaded.")
        reset()
        }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <h3>upload file</h3>
                <p>must should only PDF or JPG</p>
                <input type="file" placeholder="upload file" {...register("file")} />
                {errors.file && <p>{errors.file.message}</p>}
                <button type="submit">Upload</button> 
            </form>
        </div>
    )
}



//  Task 7: Validate File Upload Input
// Description:
// Field: file.
// Validate that a file is provided.
// Ensure the file is of a certain type (e.g., PDF or image).
// Validate file size (e.g., less than 2MB).
// Use when: User uploads documents like resumes, profile pictures, etc.
