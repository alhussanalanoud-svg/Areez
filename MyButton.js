import React, { useState } from "react";

export default function MyButton(){
  const [name, setName] = useState("Alanoud");

  function ButtonClicked(){
    if (name === "darlin"){
      setName("sweetheart");
    } else {
      setName("darlin");
    }
  }

  return (
    <div style={{display:'flex', gap:10, alignItems:'center'}}>
      <button className="btn" onClick={ButtonClicked}>Click Me</button>
      <h3 style={{margin:0}}>{name}</h3>
    </div>
  );
}
