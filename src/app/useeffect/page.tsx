"use client"

import React, { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect Counter", count);
  });
  useEffect(() => {
    console.log("Component mounted!");
  }, []);
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);
const decrement=()=>{
    if(count>0){
        setCount(count-1);
    }
}
  return (
    <div className="text-center mt-5">
      <h1 className="text-2xl font-semibold">Counter: {count}</h1>
      <button className="px-4 py-2 m-2 bg-blue-500 text-dark rounded" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="px-4 py-2 m-2 bg-red-500 text-dark rounded"onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
}
