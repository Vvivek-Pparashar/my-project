import React, { useState } from "react";

export default function TextForm(props) {
  const change = (event) => setText(event.target.value);
  const handleUpClick = () => setText(text.toUpperCase());
  const handleLpClick = () => setText(text.toLowerCase());
  // const totalSpace = ()=> ()

  const convertfirstletter = ()=>{
    let arr = text.trim().split(/\s+/).filter(tag => tag.trim() !=="")

    let newtext = "";

        arr.forEach(e =>{
             newtext += " " + e[0].toUpperCase() + e.substring(1)
        })

      setText(newtext.trim());
    }

  const clearText = () => setText("");


  const [text, setText] = useState("");

  return (
    <>
    <div>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="Mybox"
          rows="8"
          placeholder="Type here"
          value={text}
          onChange={change}
        ></textarea>
      </div>
      <button className="btn btn-primary me-4" onClick={handleUpClick}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary me-4" onClick={handleLpClick}>
        Convert To LowerCase
      </button>
      <button className="btn btn-primary me-4" onClick={convertfirstletter}>
        Convert 1st letter To upperCase
      </button>
      <button className="btn btn-primary me-4" onClick={clearText}>
        Clear Text
      </button>

    </div>

    <div className="container my-5">
      <h1>Your text summary</h1>
      <p>{text.trim().split(/\s+/).filter(tag => tag.trim() !=="").length} words & {text.length} words</p>
      </div>
    </>
  );
}
