"use client";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  const handleClick = () => {
    setData(" Home Page Clicked (dynamically)");
    alert(" Welcome to Home Page!");
  };

  return (
    <>
    <button className="btn btn-sm btn btn-primary" onClick={handleClick}>Home</button>
    <div
      id="carouselExampleRide"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/asset/p1.jpg"
            className="d-block w-100 carousel-img"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/asset/p2.jpg"
            className="d-block w-100 carousel-img"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/asset/p3.jpg"
            className="d-block w-100 carousel-img"
            alt="..."
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      <style jsx>{`
        .carousel-img {
          height: 600px; /* adjust height here */
          object-fit: cover; /* crop instead of stretching */
        }
      `}</style>
    </div>
    </>
  );
}
