"use client"
import React, { useEffect, useState } from 'react'

function page() {
    const [mounted,setMounted]=useState(false);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        localStorage.setItem("Name",name);
        localStorage.setItem("Email",email);

    }
    useEffect(()=>{
        setMounted(true)
        const Name=localStorage.getItem("Name");
        const Email=localStorage.getItem("Email");
      if(Name)  setName(Name)
    if(Email)setEmail(Email)

    })
    if(!mounted) return null;
    
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <input className='form-control' placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input className='form-control' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default page