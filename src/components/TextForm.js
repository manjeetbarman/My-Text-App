import React, {useState} from 'react'

export default function TextForm(props) {
  const handleup = ()=>{
      //console.log("Uppercase was clicked")
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to uppercase!!", "success");
  }
  const handleLo = ()=>{
    //console.log("Uppercase was clicked")
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!!", "success");

}

  const handleOnChange = (event)=>{
      setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'rgb(93 248 0)'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="MyTextarea" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleup}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLo}>Convert to Lowercase</button>

    </div>
    <div className="container my-5" style={{color: props.mode==='dark'?'white':'rgb(93 248 0)'}}>
      <h1>Your text summery</h1>
      <p>{text.split(" ").length} words & {text.length} Charecters</p>
      <p>It's take {0.008 * text.split(" ").length} minuts to read....</p>

    </div>

    </>
  )
}
