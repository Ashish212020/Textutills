import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
   props.showAlert(" converted to Uppercase","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" converted to lowercase","success");
  };

  const handleClearClick = () => {
    setText('');
  };

  const handleRemoveSpacesClick = () => {
    let newText = text.replace(/\s+/g, ' ');
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}id="myBox"  rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-warning mx-2"onClick={handleRemoveSpacesClick}>Remove Extra Spaces</button>
        </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(' ').length} words and {text.length} characters
        </p>
        <p>{(0.008 * text.split(' ').length).toFixed(2)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something for preview"}</p>
      </div>
    </>
  );
}

