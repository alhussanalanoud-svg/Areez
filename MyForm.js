import React, { useState } from "react";
import MyInput from "./MyInput";

export default function MyForm(){
  const [formInput, setFormInput] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(null);

  function handleChange(field, val){
    setFormInput(prev => ({ ...prev, [field]: val }));
  }

  function handleSubmit(e){
    e.preventDefault();
    
    setSubmitted({ ...formInput });
    
    setFormInput({ name: "", email: "" });
  }

  return (
    <form onSubmit={handleSubmit} style={{display:'grid', gap:12}}>
      <div>
        <label>Name:</label>
        <input
          className="input"
          value={formInput.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="الاسم"
          required
        />
      </div>

      <div>
        <label>E-mail:</label>
        <input
          className="input"
          type="email"
          value={formInput.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="example@mail.com"
          required
        />
      </div>

      <div style={{display:'flex', gap:8, justifyContent:'flex-end', marginTop:6}}>
        <button type="button" className="btn secondary" onClick={() => setFormInput({ name: "", email: "" })}>Clear</button>
        <button type="submit" className="btn">Submit</button>
      </div>

      {submitted && (
        <div style={{marginTop:8, padding:12, borderRadius:10, background:'#f8fffc', border:'1px solid #e6f7f6'}}>
          <div style={{fontWeight:700}}>تم الإرسال</div>
          <div className="small-muted">Name: {submitted.name} — Email: {submitted.email}</div>
        </div>
      )}
    </form>
  )
}
