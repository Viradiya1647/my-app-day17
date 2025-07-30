import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const yupObject = yup.object().shape({
  title: yup.string().required("title is required."),
  price: yup
    .number()
    .typeError("price must be a number.")
    .positive("must be positive.")
    .required("price required.")
    .test("","must be even", val => val%2===0),
  inStock: yup.boolean().required("stoke status required."),
});

export default function ProductData() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupObject) });

  const onSubmit = (data) => {
    console.log("product detatils: ", data);
    reset();
  };

  return (
    <div>
      <h3>Product...</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="title" type="text" {...register("title")} />
        {errors.title && <p>{errors.title.message}</p>}

        <input placeholder="price" type="number" {...register("price")} />
        {errors.price && <p>{errors.price.message}</p>}

        <label>
          <input type="checkbox" {...register("inStock")} />
          In stock
        </label>
          {errors.inStock && <p>{errors.inStock.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Task 5: Validate Product Data Before Saving
// Description:
// Fields: title, price, inStock.
// title is required.
// price must be a positive number.
// inStock must be a boolean.
// Us
