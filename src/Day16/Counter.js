import useCounter from "./useCounter";
export default function Counter(){
    const {value,increment,decrement,reset} = useCounter(10)
    return(
        <div>
            <p>{value}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}