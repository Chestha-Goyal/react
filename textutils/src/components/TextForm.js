import React, { useState } from 'react'
// hook ko import kiya react se
// useState hook state variable bnna me help krta hai
//hooks bina class bnya class ka features use krne dete hai


//  console.log(useState('Enter text here2'))

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    // setText("You Have Clicked")
  }
  const handleLowClick = ()=>{
    // console.log("Lowcase clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = (event)=>{
    let newText = '';
    setText(newText)
  }
  const handleOnChange = (event)=>{
    console.log("change");
    setText(event.target.value)
  }

  const handleCopy = () => {
    // console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    // iski need nhi hai jab ham selcet.text krte hai to pura text copy ho jata hai
    // text.setSelectionRange(0, 9999);
    // navigator interface le kr pura text ko copy kr hi diya hai
    navigator.clipboard.writeText(text.value);
  }

  // rjaxs use kiya hai ya ajax in javascript
  const handleExtraSpaces = () =>{
    // ik ya ik se zada spaces ha agar to split kr diya ha us text ko basically ik array bn jyga
    // [ ] is se split ho jyga jitni bhi spaces hogi fr
    let newText = text.split(/[ ]+/);
    //  array bn jyga then is se john krke bs ik space kr dege
    setText(newText.john(" "))
  }

  const [text, setText] = useState('');
  // text hai jo text me text area me enter text here ki default value aa jye
  // text = "ajhsvba" wrong way to change state asa update nhi kr skte ham 'state' ko
  // hme updation function use krna pdga
  // setText("afsdgfascfhga"); correct way to change state
  // value change ho jygi text isko as a funstion hi call krna pdgha
  return (
    <>
    <div className="container">
      {/* <h1>{props.heading} - {text}</h1> */}
      <h1>{props.heading}</h1>
      <div class="mb-3">
        {/*  <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Change to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Change to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container">
      <h3>Summary</h3>
      <p><b>{text.split(" ").length} words and {text.length} characters</b></p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h4><u>Preview</u></h4>
      <p>{text}</p>
    </div>
    </>
  )
}
