import React from "react";


export default function Myinput({ value, onChange, placeholder = "" }) {
  
  return (
    <div>
      <label style={{display:"block", fontSize:12, color:"#64748b", marginBottom:6}}>Your Name</label>
      <input
        className="input"
        value={value ?? ""}
        onChange={(e) => onChange ? onChange(e.target.value) : null}
        placeholder={placeholder}
        aria-label="your-name"
      />
    </div>
  );
}
