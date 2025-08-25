"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const GetUserBYID = () => {
  const params = useParams<{ id: string }>();
  const id = params?.id;

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/user/getByID/${id}`)
        .then((res) => res.json())
        .then((result) => setData(result))
    }
  }, [id]);
  console.log("Data is:",data)

  if (!data) return <p className="display-6 text-center">Loading...</p>;

  return (
    <div className="container d-flex justify-content-center">
        <div className="card shadow w-100" style={{maxWidth:400}}>
  <div className="card-header bg-primary-subtle  fs-4 fw-bold text-center">
   {data.getUser.UserName}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item p-3 fs-5"><b>Email: </b>{data.getUser.UserEmail}</li>
    <li className="list-group-item p-3 fs-5"><b>Age: </b>{data.getUser.age}</li>
    <li className="list-group-item p-3 fs-5"><b>Phone: </b>{data.getUser.phone}</li>
  </ul>
</div>
     
    </div>
  );
};

export default GetUserBYID;
