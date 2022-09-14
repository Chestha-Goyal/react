import React, {useState} from 'react'  
// hook ko import kiya react se
//hooks bina class bnya class ka features use krne dete hai


//  console.log(useState('Enter text here2'))

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  // text hai jo text me text area me enter text here ki default value aa jye
  // text = "ajhsvba" asa update nhi kr skte ham 'state' ko
  // hme updation function use krna pdga
  setText("afsdgfascfhga");
  // value change ho jygi text isko as a funstion hi call krna pdgha
  return (
    <div>
      <h1>{props.heading} - {text}</h1>
      <div class="mb-3">
      {/*  <label for="myBox" class="form-label">Example textarea</label> */}
      <textarea className="form-control" id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary">Change to Uppercase</button>
    </div>
  )
}
