"use client"
import React, { useState } from 'react'

const AddUser = () => {
    const [newUser,setNewUser]=useState({
        UserName:"",
        UserEmail:"",
        UserPassword:"",
        age:"",
        phone:"",
        isActive:true
    })
    const handleSubmit=async(e:React.FormEvent)=>{
        try {
            e.preventDefault();
        const res=await fetch("http://localhost:3000/api/user/addUser/post",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({...newUser,age:Number(newUser.age)})
            }
            
        )
        if(!res.ok) throw new Error ("Failed to add user")
        const created=await res.json();
        console.log("User added successfully!!",created);
        setNewUser({UserName:"",UserEmail:"",UserPassword:"",age:"",phone:"",isActive:newUser.isActive});
        alert("User added successfully!!");
            
        } catch (error) {
            alert("Error to add user")
            console.log("Error occure to add user",error);
            
        }
        

    }
  return (
    <div>
        <h2>Add user</h2>
        <form onSubmit={handleSubmit}>
            

             <input type='text' placeholder='Enter name' value={newUser.UserName}
             onChange={(e) => setNewUser({ ...newUser, UserName: e.target.value })}/>

             <input type='email' placeholder='Enter email' value={newUser.UserEmail}
             onChange={(e) => setNewUser({ ...newUser, UserEmail: e.target.value })}/>

             <input type='password' placeholder='Enter password' value={newUser.UserPassword}
             onChange={(e) => setNewUser({ ...newUser, UserPassword: e.target.value })}/>


             <input type='text' placeholder='Enter age' value={newUser.age}
             onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}/>

             <input type='text' placeholder='Enter phone' value={newUser.phone}
             onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}/>
            <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input me-2"
            checked={newUser.isActive}
            onChange={(e) =>
              setNewUser({ ...newUser, isActive: e.target.checked })
            }
          />
          Active User
        </label>
<button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddUser