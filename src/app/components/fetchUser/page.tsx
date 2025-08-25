"use client"
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface User {
  UserID: number;
  UserName: string;
  UserEmail: string;
  age: number;
  phone: string;
  isActive: boolean;
}

const FetchUser: NextPage = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const handleDeleteUser = async (id: number) => {
    if (!confirm("Are you sure want to delete??")) return;
    try {
      const res = await fetch(`http://localhost:3000/api/user/delete/${id}`, {
        method: "DELETE"
      })
      if (!res) {
        throw new Error("Failed to delete user!!")
      }
      setData((u) => u.filter((user) => user.UserID !== id))

    } catch (error) {
      alert("Error in deleting user!")

    }
  }

  const getUser = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/user/getUser/getData");
      if (!res.ok) throw new Error("Failed to fetch users");
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) return <div className="text-center mt-5 display-6">Loading users...</div>;

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-5" >User List from api</h2>
      <Link href={"/components/addUser"}>
        <div tabIndex={0} className="plusButton mb-2">
          <svg className="plusIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <g mask="url(#mask0_21_345)">
              <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
            </g>
          </svg>
        </div></Link>
      <div className="row g-4">
        {data.map((user) => (
          <div className="col-md-4" key={user.UserID}>
            <div className="card border-0 shadow h-100 rounded-4">
              <div className="card-header bg-primary-subtle text-center text-dark rounded-top-4">
                <h5 className="mb-0">{user.UserName}</h5>
              </div>
              <div className="card-body">
                <p className="mb-2"><b>Email:</b> {user.UserEmail}</p>
                <p className="mb-2"><b>Age:</b> {user.age}</p>
                <p className="mb-2"><b>Phone:</b> {user.phone}</p>
                <p>
                  <b>Status:</b>{" "}
                  {user.isActive ? (
                    <span className="badge bg-success-subtle text-dark border border-success px-3 py-2">Active</span>
                  ) : (
                    <span className="badge bg-danger-subtle  text-dark border border-danger px-3 py-2">Inactive</span>
                  )}
                </p>
              </div>
              <div className="card-footer text-center bg-light rounded-bottom-4">
                <Link href={`/components/getByID/${user.UserID}`}>
                <button className="btn bg-dark-subtle btn-sm border border-dark me-1">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg></button>  </Link>
              <Link href={`/components/editUser/${user.UserID}`}>
                  <button className="btn btn-sm bg-success-subtle border border-success me-2 px-3">Edit</button>
                </Link>
                <button onClick={() => handleDeleteUser(user.UserID)} className="btn btn-sm bg-danger-subtle border border-danger px-3">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchUser;
