import { useState } from "react";
export default function useCounter(initialValue) {
  const [value, setValue] = useState(initialValue);
  const increment = () => setValue((val) => val + 1);
  const decrement = () => setValue((val) => val - 1);
  const reset = () => setValue(initialValue);
  return { value, increment, decrement, reset };
}
