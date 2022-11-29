import React, { useState } from "react";
import axios from "axios";

export default function AddPost() {
  const {title, setTitle} = useState("-");
  const {body, setBody} = useState("-");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/posts',{title,body}).then((res) => {
      const palautus = res.data;
      console.log(palautus);
    });
  };
  return <>
    <div className="child-div">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <div className="field1">
            <label> Post </label>
            <input placeholder="Title"onChange={(event) => setTitle(event.target.value)}/>
            <textarea placeholder="Body"onChange={(event) => setBody(event.target.value)}/>
          </div>
          <button type="submit" id="submitBtn" className="submitBtn">{" "}Tallenna uusi posti</button>
        </form>
      </div>
    </div>
</>;
}
