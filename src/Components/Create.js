import React, {  useContext, useRef } from "react";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";
import "./create.css"
const Create = () => {
  const data = useContext(Context);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const { text, setText } = data;

  const handleSubmit = () => {
    
    const Heading = inputRef.current.heading.value;
    const Blog = inputRef.current.blog.value;
    // const id=Math.floor(Math.random()*1000)
    setText([...text,{Heading, Blog }])
    navigate("/list"); 
  }
  console.warn(text)
 
  return (
    <div>
      <form ref={inputRef} onSubmit={(e) => e.preventDefault()}>
        <label>Heading:</label>
        <input className='input' type="text" name="heading" required></input><br/>
      
        <br />
        <br />
        <label>Blog:</label>
        <input className='input' type="text" name="blog" required></input><br/>
     
        <br />
        <button onClick={handleSubmit}  >Submit</button>
      </form>

      {text[0] == null ? null:<button  onClick={()=>navigate('/list')}>List</button>}
    </div>
  );
};

export default Create;
