import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const yupObject = yup.object().shape({
  username: yup.string().required("name required."),
  email: yup.string().required("email is required.").email("invalid email"),
  password: yup
    .string()
    .required("password is required.")
    .min(5, "password is too short.")
    .matches(/[a-z]/, "should contain 1 lowercase.")
    .matches(/[A-Z]/, "should contain 1 uppercase.")
    .matches(/\d/, "should contain 1 number.")
    .matches(/[!@#$%^&*(){}:";'<>,./-_]/, "should contain 1 special charaxter."),
  matchPassword: yup
    .string()
    .oneOf([yup.ref("password")], "pasword must match."),
});

export default function Signup() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupObject) });
  const onSubmit = (data) => {
    console.log("signup data:", data);
    alert("signed up.");
    reset();
  };
  return (
    <div>
      <div>
        <h2>Signup</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="username" {...register("username")} />
          {errors.username && <p>{errors.username.message}</p>}

          <input placeholder="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}

          <input placeholder="password" type="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}

          <input
            placeholder="confirm password" type="password"
            {...register("matchPassword")}
          />
          {errors.matchPassword && <p>{errors.matchPassword.message}</p>}

          <button type="submit">Submmit</button>
        </form>
      </div>
    </div>
  );
}
