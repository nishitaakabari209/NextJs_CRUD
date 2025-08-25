import React from 'react'
export default function Propspage({ name, age, email }: {name:String,age:any,email:String}) {
  return (
    <div className="card shadow-lg h-100">
      <div className="card-header text-center fw-semibold fs-5">
    User Information
  </div>
      <div className="card-body text-center">
        <p className="card-text"><b>Name:</b> {name}
        </p>
        <p className="card-text">
          <b>Age:</b> {age}
        </p>
        <p className="card-text">
          <b>Email:</b> {email}
        </p>
        <button className="btn bg-primary-subtle border border-primary">Contact</button>
      </div>
    </div>
  )
}
