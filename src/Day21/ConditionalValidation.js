import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const zObject = z
  .object({
    newsletterSubsribed: z.boolean(),
    email: z.string().email("invalid email").optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.newsletterSubsribed &&
      (!data.email || !data.email.includes("@"))
    ) {
      ctx.addIssue({
        path: ["email"],
        message: "valid email required to subscribe.",
        code: z.ZodIssueCode.custom,
      });
    }
  });

export default function ConditionalValidation() {
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zObject),
    defaultValues: {
      newsletterSubsribed: false,
      email: "",
    },
  });
  const onSubmit = (data) => {
    console.log("form submitted: ", data);
    alert("form submitted.");
    reset();
  };
  const isSubsribed = watch("newsletterSubsribed");
  return (
    <div>
      <h3>conditional validation...</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>newsletter signup</h3>
        <label>
          <input type="checkbox" {...register("newsletterSubscribed")} />
          subsribe to newsletter
        </label>
        {isSubsribed && (
          <>
            <input placeholder="enter email" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
          </>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
