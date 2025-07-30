//import useForm hook from -> 
//it helps you to enable forms in react more easily manage input values
import { useForm } from "react-hook-form";

//imports yupResolver
//connects the yup validation schema to react-hook-form 
//acts like bridge between react-hook-form and yup validation rules
import { yupResolver } from "@hookform/resolvers/yup";

//imports full yup library 
import * as yup from "yup";
 

//yup.object().shape({})
//creates schema object
//that contains validation rules for each form field
const schema = yup.object().shape({
    email: yup.string().email("invalid email.").required("email is required."),
     password: yup.string()
        .required("password is reuired.")
        .min(8,"password must be atleast 8 characters")
        .matches(/[a-z]/,"password must contain atleast one lowercase letter.")
        .matches(/[A-Z]/,"password mustpassword contain atleast one uppercase letter.")
        .matches(/\d/,"password must contain atleast one number.")
        .matches(/[!@#$%^&*_(),.?":{}|<>]/,"password must contain atleast one special chareacter.")
    
})
 
export default function FormYupNew() {

    //regisdter connects form inputs to react hook form.
    //it tracks changes and validation.

    //handleSubmit function to handle submission
    //automatically runs validation first

    //formState: {errors} contains any validation errors
    //returned by the yup schema 

    //resolver: yupResolver(shema) 
    //tells react-hook-form to
    //use the Yup schema for validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  //form is submitted and all validations pass,
  //this function runs 
  //data parameter will contain all field values
  const onSubmit = (data) => {
    console.log("form data: ",data)
    reset()
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>

        {/* {...register("Email")}  -->  connects the input to react hook form with the name "name"*/}

        <input placeholder="Email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <input placeholder="Password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Submit</button>
    </form>
  )
}

