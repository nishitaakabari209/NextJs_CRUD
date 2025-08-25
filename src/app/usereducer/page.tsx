"use client"
import React, { useReducer } from "react";

function reducer(state: number, action: { type: string }) {
  if (action.type === "increment") return state + 1;
  if (action.type === "decrement" && state>0) return state - 1;
  if (action.type === "reset") return 0;
  return state;
}

export default function Page() {
  const [count, dispatch] = useReducer(reducer, 0); 

  return (
    <>
    <h1 className='text-center'>Counter using UseReducer Hook</h1>
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: "30rem" }}>
        <h2 className="text-center fw-bold mb-4">Counter</h2>
<div className="text-center mb-4">
 <h1 className="display-4 fw-semibold">{count}</h1>
        </div>
<div className="d-flex justify-content-between">
    <button className="btn btn-primary m-2 w-50" onClick={() => dispatch({ type: "increment" })}>+</button>
    <button className="btn btn-dark m-2 w-50" onClick={() => dispatch({ type: "reset" })}>Reset</button>

     <button className="btn btn-danger m-2 w-50" onClick={() => dispatch({ type: "decrement" })}>-</button>

        </div>
      </div>
    </div>
    </>
  );
}
