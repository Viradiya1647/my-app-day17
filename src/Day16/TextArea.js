import { useState } from "react";
export default function TextArea() {
  const [text, setText] = useState("");
  const maxChars = 150;
  const handleChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxChars) {
      setText(newText);
    } 
  };
  const remaining = maxChars - text.length
  const limitReached = text.length === maxChars
  return(
    <div>
        <h2>Character Count:</h2>
        <textarea rows="10" value={text} onChange={handleChange} placeholder="type anything..." />
        <p>{text.length}/{maxChars} characters used.</p>
        <p>{remaining} remaining.</p>
        {limitReached && <p style={{color: "red"}}>Maximum character limit reached!</p>}
    </div>
  )
}
