import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const yupObject = yup.object().shape({
  name: yup.string().required("name required."),
  email: yup.string().required("email is required.").email("invalid email"),
  message: yup
    .string()
    .min(10, "feedback is too short.")
    .required("enter feedback."),
});

export default function FeedbackForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupObject) });

  const onSubmmit = (data) => {
    console.log("feedback data: ", data);
    alert("feedback submitted.");
    reset()
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmmit)}>
        <input placeholder="name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}

        <input placeholder="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <input placeholder="give your feedback here." {...register("message")} />
        {errors.message && <p>{errors.message.message}</p>}

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}
