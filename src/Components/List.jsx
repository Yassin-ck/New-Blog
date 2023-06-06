import React, { useContext, useEffect } from "react";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";
const List = () => {
  const data = useContext(Context);
  // const{text}=data
  const navigate=useNavigate()
// useEffect(()=>{
// if (text[text.length-1].Heading ===[] || text[text.length-1].Blog === []) {
//   alert('Fill the field')
//    navigate('/')
// }
// },[])
// console.warn(text[text.length-1].Heading);
  return (
    <div>
      <ul>
      { data.text.map((item,index) => {
        return (
          
            <div key={index}>
              <li style={{listStyle:"none"}}>
                <h1 onClick={()=>{navigate(`/list/${index}`)}}>{item.Heading}</h1>
              </li>
            </div>
          );
        })}
      </ul>
      <button  onClick={()=>navigate("/")}>+ new Blog</button>
    </div>
  
  );
};

export default List;
// {data.text.map((item,index) => { 
//   return (