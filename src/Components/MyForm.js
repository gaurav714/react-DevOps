import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function MyForm(props) {
  const [text, setText] = useState("");
  const UpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };
  return (
    <>
      <Form className={props.DarkMode ? "text-light" : "text-dark"}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter Text Here</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            value={text}
            onChange={(event) => setText(event.target.value)}
            style={{ backgroundColor: props.DarkMode ? "#323234" : "white" }}
            className={props.DarkMode ? "text-light" : "text-dark"}
          />
        </Form.Group>
        <button className="btn btn-primary" onClick={UpperCase}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={() => setText("")}>
          Clear Text
        </button>
      </Form>
      <div className="my-3">
        <h5 className={props.DarkMode ? "text-light" : "text-dark"}>
          Number of words: {text.split(" ").length}
        </h5>
        <h5 className={props.DarkMode ? "text-light" : "text-dark"}>
          Number of characters: {text.length}
        </h5>
        <h5>This is version 9</h5>
      </div>
    </>
  );
}
