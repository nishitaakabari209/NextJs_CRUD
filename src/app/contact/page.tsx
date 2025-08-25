"use client"
import React, { useState, useEffect } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    //  e.preventDefault();
    localStorage.setItem("UserName", name);
    localStorage.setItem("UserEmail", email);
    alert("Data saved in localStorage");
  };
  useEffect(() => {
    const savedName = localStorage.getItem("UserName");
    const savedEmail = localStorage.getItem("UserEmail");
    
    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
  }, []);

  return (
<div className="container mt-5">
<div className="row justify-content-center">
<div className="col-md-6">
<div className="card shadow-lg border-0 rounded-3">
<div className="card-body p-4">
 <h3 className="card-title text-center mb-4 text-dark ">
  Contact us</h3>
              <hr />
<form onSubmit={handleSubmit}>

<div className="mb-3">
<label className="form-label">
First Name
</label>
<input type="text"id="firstName"className="form-control"placeholder="Enter first name"value={name} onChange={(e) => setName(e.target.value)} />
 </div>

<div className="mb-3">
    <label className="form-label">
                    Email
    </label>
    <input type="email" id="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

<div className="d-grid">
<button type="submit"className="btn bg-primary-subtle border border-primary ">
Submit</button>
                </div>
              </form>
              <div className="mt-3">
                <h6>Saved Data:</h6>
                <p>
                  <b>Name:</b> {name}
                </p>
                <p>
                  <b>Email:</b> {email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
