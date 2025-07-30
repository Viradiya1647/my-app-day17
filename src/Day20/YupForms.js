// import { useForm  } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from 'yup'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const yupObject = yup.object().shape({
  email: yup.string().email("invalid email").required("rmail is required."),
  password: yup
    .string()
    .min(8, "password should have minimum 8 chaecters long.")
    .required("password is rewuired.")
    .matches(/[a-z]/, "should contais atleast 1 lowercase.")
    .matches(/[A-Z]/, "should contais atleast 1 uppercase.")
    .matches(/\d/, "should contais atleast 1 number.")
    .matches(/[!#@$%^&*?{}<>_-]/, "should contais atleast 1 special charecter."),
});

export default function YupForms() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupObject) });

  const onSubmit = (data) => {
    console.log("information about login: ", data);
    alert("login successfully.")    
    reset()
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="enter your email" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
            <input placeholder="enter your password" {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
            <button type="submmit">Submit</button>

        </form>
      </div>
    </div>
  );
}


// Task 3: Validate a Signup Form with Password Confirmation
// Description:
// Fields: username, email, password, confirmPassword.
// All fields required.
// confirmPassword must match password.
// Use when: Registering a new user and confirming their password

// Task 4: Validate Age and Gender for a Profile Setup
// Description:
// Age must be a number between 18 and 100.
// Gender must be one of: 'male', 'female', 'other'.
// Use when: Completing a user profile setup after registration.

// Task 5: Validate Product Data Before Saving
// Description:
// Fields: title, price, inStock.
// title is required.
// price must be a positive number.
// inStock must be a boolean.
// Use when: Creating or updating product entries in a dashboard.
