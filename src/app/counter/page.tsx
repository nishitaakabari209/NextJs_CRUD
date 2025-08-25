"use client"
import React, { useState } from 'react'

export default function page() {
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        if(count>0){
            setCount(count-1);
        }
    }

  return (
    <>
    <h1 className='text-center'>Counter using UseState</h1>
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: "30rem" }}>
        <h2 className="text-center fw-bold mb-4">Counter</h2>
<div className="text-center mb-4">
 <h1 className="display-4 fw-semibold">{count}</h1>
        </div>
<div className="d-flex justify-content-between">
    <button className="btn btn-danger w-50 me-2" onClick={decrement}>
          Decrement </button>
          <button className="btn btn-primary w-50 ms-2" onClick={increment}>
            Increment
          </button>
        </div>
      </div>
    </div></>
  );
}
