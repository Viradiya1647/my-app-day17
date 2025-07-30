import useToggle from "./useToggle";
export default function Toggle(){
    const {value,toggle,setTrue,setFalse} = useToggle()

    return(
        <div>
            <button onClick={toggle}>Toggle</button>
            <button onClick={setTrue}>show</button>
            <button onClick={setFalse}>hide</button>
            {value && <p>This is visible !</p>}
        </div>
    )

}