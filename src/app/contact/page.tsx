"use client";
import { useDispatch } from "react-redux";
import { addContact } from "@/store/store"; 
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addContact({ id: uuidv4(), ...form }));
    setForm({ name: "", email: "", message: "" });
    alert("Contact saved successfully!");
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg border-0" style={{ maxWidth: "500px", width: "100%" }}>
        <div className="card-header bg-primary-subtle text-dark text-center ">
          <h4 className="p-2">Contact Us</h4>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            
            <div className="form-group">
              <label className="form-label fw-bold">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label fw-bold">Message</label>
              <textarea
                className="form-control"
                rows={4}
                placeholder="Enter your message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="btn bg-primary-subtle border border-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
