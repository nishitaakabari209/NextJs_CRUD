"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function ContactList() {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <div className="max-w-2xl mx-auto p-4 shadow rounded bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">Contact Us List</h2>
      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        <table className="table">
          <thead>
            <tr >
                <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id}>
                <th scope="row">1</th>
                <td >{c.name}</td>
                <td>{c.email}</td>
                <td>{c.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
