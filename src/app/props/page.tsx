import React from 'react'
import Propspage from './usePage'

export default function Page() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-dark fw-bold " style={{fontFamily:"sans-serif"}}>Props Example</h2>
      
      <div className="row g-4">
        <div className="col-md-4">
          <Propspage name="Nishita" age={21} email="nishita@gmail.com" />
        </div>
        <div className="col-md-4">
          <Propspage name="Tome" age={32} email="tom@gmail.com" />
        </div>
        <div className="col-md-4">
          <Propspage name="John" age={23} email="john.doe@gmail.com" />
        </div>
        <div className="col-md-4">
          <Propspage name="Alisa" age={34} email="alisa@gmail.com" />
        </div>
        <div className="col-md-4">
          <Propspage name="Renna" age={22} email="riya.renna@gmail.com" />
        </div>
        <div className="col-md-4">
          <Propspage name="Cubic" age={33} email="cubic.com@gmail.com" />
        </div>
      </div>
    </div>
  )
}
