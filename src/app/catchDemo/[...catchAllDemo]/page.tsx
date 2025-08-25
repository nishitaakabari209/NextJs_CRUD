"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function Catch() {
    const param=useParams();
  return (
    <div><p>This is from catch all segment:</p>
    <p>Id is:{param.id}</p>
    </div>
    
  )
}

export default Catch