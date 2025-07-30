import useForm from "./useForm";
 
export default function Form() {
  const initialValues = { name: "", email: "" };
  
  const validate = (values) => {
    let errors = {};
    if (!values.name.trim()) {
      errors.name = "name is requierd.";
    }
    if (!values.email.trim()) {
      errors.email = "email is requierd.";
    } else if (!/^[\w.-]+@[a-zA-Z_-]+\.[a-zA-Z]{2,6}$/.test(values.email)) {
      errors.email = "invalid email.";
    }
    return errors;
  };
  const { values, errors, handleChange, handleSubmit } = useForm(initialValues, validate);
   
  const submitForm = () => {
    alert("Form submitted successfully!");
    console.log(values);
  };


  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <h2>Form</h2>
        <div>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              value={values.name}
              onChange={handleChange}
            />
          </label>
          {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
        </div>
        <div>
          <label> 
            Email:{" "}
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              value={values.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
