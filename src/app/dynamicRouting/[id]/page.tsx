"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
    const param=useParams();
  return (
    <div>
        <p>This is from Dynamic routing[id]</p>
        <p>User ID:{param.id}</p>
    </div>
  )
}

export default page