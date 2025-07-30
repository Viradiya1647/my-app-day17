import { useState,useRef, useEffect } from "react";
import useClickOutside from "./useClickOutside";

export default function ClickOutside() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null)
  
  //example1
  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  },[isOpen]) 

  //example2
  const renderCount = useRef(1)
  const[renderValue,setRenderValue] = useState("")

  //example3
  const[increaseCount,setIncreaseCount] = useState(0)
  const prevCount = useRef(0)

  useEffect(()=>{
    prevCount.current=increaseCount 
  },[increaseCount])

  useClickOutside(modalRef, () => {
    if (isOpen) setIsOpen(false);
  });
  return (
    <div>

      
      <button onClick={() => setIsOpen(true)}>Open Model</button>
      {isOpen ? (
        <div ref={modalRef}>
          <h3>This is modal.</h3>
          <p>Click outside to close.</p>
        </div>
      ) : (
        <p>Modal closed. Click button to open.</p>
      )}


       {/* example1 lines */} 
      <div>
      <input ref={inputRef} placeholder="auto-focused!" />
      </div>
      <div>
        <input onChange={(e)=>setRenderValue(e.target.value)} />
        <p>Rendered: {(renderCount.current++)*0.5} times. ({renderValue})</p>
      </div>
      <div>
        <p>Current: {increaseCount}</p>
        <p>Previous: {prevCount.current}</p>
        <button onClick={()=>setIncreaseCount(increaseCount+1)}>+1</button>
      </div>
    </div>
  );
}
