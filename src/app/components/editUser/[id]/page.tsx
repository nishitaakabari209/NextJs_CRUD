"use client";
import React, { useEffect, useState } from "react";
import { redirect, useParams } from "next/navigation";

const UpdateUser = () => {
  const params = useParams<{ id: string }>(); 
  const id = params?.id;

  const [user, setUser] = useState({
    UserName: "",
    UserEmail: "",
    age: "",
    phone: "",
    isActive: true,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    const fetchUser = async () => {
      const res = await fetch(`http://localhost:3000/api/user/getByID/${id}`);
      const data = await res.json();
      console.log(data)
      setUser({
        UserName: data.getUser.UserName,
        UserEmail: data.getUser.UserEmail,
        age: data.getUser.age,
        phone: data.getUser.phone,
        isActive: data.getUser.isActive,
      });
      setLoading(false);
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/api/user/editUser/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user, age: Number(user.age) }),
    });
    alert("User updated successfully!");
    redirect('/components/fetchUser')
  };

  if (loading) return <p>Loading user...</p>;

  return (
    <div className="container">
      <h2 className="text-center">Update User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text" className="form-control m-3"
          placeholder="Name"
          value={user.UserName}
          onChange={(e) => setUser({ ...user, UserName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email" className="form-control m-3"
          value={user.UserEmail}
          onChange={(e) => setUser({ ...user, UserEmail: e.target.value })}
        />
        <input
          type="text" className="form-control m-3"
          placeholder="Age"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
        <input
          type="text" className="form-control m-3"
          placeholder="Phone"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
        <label>
          <input
            type="checkbox"
            className="m-3"
            checked={user.isActive}
            onChange={(e) => setUser({ ...user, isActive: e.target.checked })}
          />
          Active User
        </label>
        <button className="btn bg-primary-subtle border border-primary" type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
