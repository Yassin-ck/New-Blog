// import React, { useContext, useState } from "react";
// import Context from "../Context/Context";
// import { useParams } from "react-router-dom";

// const Display = () => {
//   const data = useContext(Context);
//   const { id } = useParams();
//  const para={id}
//  const {text}=data

// const reader=(item)=>{
// return item.Heading
// }


//   return (
//     <div onSubmit={e=>e.preventDefault()}>
//      {data.text.filter((item)=>{
//       return item.id==para.id?item.Heading:console.log('wrong');
//      })}
//     </div>
//   )}


// export default Display;


import React, { useContext } from "react";
import Context from "../Context/Context";
import { useParams } from "react-router-dom";

const Display = () => {
  const data = useContext(Context);
  const { id } = useParams();


  const filteredData = data.text.filter((item) => item.id === parseInt(id));
  

  return (
    <div>
      {filteredData.map((item) => (
        <div key={item.id}>
          <h1>{item.Heading}</h1>
          <p>{item.Blog}</p>
        </div>
      ))}
    </div>
  );
};

export default Display;
