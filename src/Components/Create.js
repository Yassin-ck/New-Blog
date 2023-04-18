import React, { useContext, useRef } from "react";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const data = useContext(Context);
  const inputRef = useRef(null);

  const navigate = useNavigate();

  const { text, setText } = data;

  const handleSubmit = () => {
    const Heading = inputRef.current.heading.value;
    const Blog = inputRef.current.blog.value;
    const id=Math.floor(Math.random()*1000)
    setText([...text,{Heading, Blog ,id}]);

    navigate("/list");
  };

  return (
    <div>
      <form ref={inputRef} onSubmit={(e) => e.preventDefault()}>
        <label>Heading:</label>
        <input type="text" name="heading"></input>
        <br />
        <br />
        <label>Blog:</label>
        <input type="text" name="blog"></input>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Create;
