import React, { useContext } from "react";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";
const List = () => {
  const data = useContext(Context);
  const{text}=data
  const navigate=useNavigate()


  return (
    <div>
      <ul>
       
        {data.text.map((item,index) => { 
          return (
            <div key={index}>
              <li>
                <h1 onClick={()=>{navigate(`/list/${item.id}`)}}>{item.Heading}</h1>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
