import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper Case was Clicked");
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleDownClick = () => {
    console.log("Lower Case was Clicked");
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event) => {
    console.log("Handle Was Change");
    setText(event.target.value)
  }

  const handleCopy = ()=>{
    console.log("Text was Copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace = ()=>{
    console.log("Spaces Removed")
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
const [text, setText] = useState('');
 
  return (
    <div>
      <div className="container">
    <h1>{props.heading}</h1>
<div className="my-3">
  <label for="myBox" className="form-label">{props.label}</label>
  <textarea className="form-control bg-dark text-light" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
  <button onClick={handleUpClick} className="btn btn-danger mt-3">Convert to UpperCase</button>
  <button onClick={handleDownClick} className="btn btn-primary mx-3 mt-3 ">Convert to LowerCase</button>
  <button onClick={handleCopy} className="btn btn-success  mx-2 mt-3 ">Copy Text</button>
  <button onClick={handleExtraSpace} className="btn btn-dark  mx-2 mt-3 ">Remove Spaces</button>
</div>
<div className="container my-3">
  <h1>Your Text Summry</h1>
  <p>{text.split(" ").length} Words and {text.length} Charchters</p>
  <p>{0.008 * text.split(" ").length} Minutes Read</p>
  <h2>Preview</h2>
   <p>{text}</p>
</div>
    </div>
    </div>
  )
}

