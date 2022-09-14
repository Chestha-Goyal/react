import React, { useState } from 'react'
// hook ko import kiya react se
// useState hook state variable bnna me help krta hai
//hooks bina class bnya class ka features use krne dete hai


//  console.log(useState('Enter text here2'))

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    // setText("You Have Clicked")
  }
  const handleOnChange = (event)=>{
    console.log("change");
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter text here');
  // text hai jo text me text area me enter text here ki default value aa jye
  // text = "ajhsvba" wrong way to change state asa update nhi kr skte ham 'state' ko
  // hme updation function use krna pdga
  // setText("afsdgfascfhga"); correct way to change state
  // value change ho jygi text isko as a funstion hi call krna pdgha
  return (
    <div>
      {/* <h1>{props.heading} - {text}</h1> */}
      <h1>{props.heading}</h1>
      <div class="mb-3">
        {/*  <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Change to Uppercase</button>
    </div>
  )
}
