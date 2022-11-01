import React, { useState } from "react";
//useState is one the hooks used in React

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE!", "success");
  };

  const handleLowClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Cleared TextForm.", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed.", "success");
  };

  // onchange event is necessary to give input to TextArea
  const handOnChange = (event) => {
    setText(event.target.value);
  };

  const [Text, setText] = useState("");
  //   Text = "hello world"; //wrong way to change state
  //   setText("hello world"); //correct way to change state

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            id="myBox"
            onChange={handOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={handleClear}>
          CLEAR TEXT
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2 my-1" onClick={handleSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3 my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {Text.split(" ").length} words and {Text.length} characters
        </p>
        <p>{Text.split(" ").length * 0.008} Minutes read</p>
      </div>

      <div
        className="container my-3 my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Preview</h3>
        <p>
          {Text.length > 0
            ? Text
            : "Enter your text in the TextArea above to preview it here"}
        </p>
      </div>
    </>
  );
}
