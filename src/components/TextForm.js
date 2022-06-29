import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleonchange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };
  const cleartext = () => {
    let newtext = text.trimEnd(); // text= ("")
    setText(newtext.slice(0, 0));
  };
  const handlelower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleUpperk = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  return (
    <>
      <div className="container">
        <div>
          <label htmlFor="myBox" className="form-label">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows={7}
            placeholder="Enter Your Text Here"
            onChange={handleonchange}
            style={{backgroundColor: props.mode==='light'?'white':'gray',color: props.mode==='light'?'black':'black'}}
          />
        </div>

        <button className="btn btn-primary  my-2" onClick={handleUpperk}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handlelower}>
          Convert To LowerCase
        </button>
        <button className="btn btn-secondary mx-2" onClick={cleartext}>
          Clear the Text
        </button>
      </div>
      <div className="container my-2">
        <h2>Your Text Stats</h2>
        <p>
          {text.split(" ").length - 1} Words,{text.length} Characters.
        </p>
        <p>{(text.split(" ").length - 1) * 0.08} Minutes of Reading</p>
      </div>
    </>
  );
}
