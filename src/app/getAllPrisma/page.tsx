import mysql from "mysql2/promise";
import Link from "next/link";
import { PrismaClient } from "@/generated/prisma";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export default async function GetUserdata() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "user",
  });
  const [result] = await connection.query("SELECT * FROM User");
  await connection.end();

  async function handleDelete(formData: FormData) {
    "use server";
    const id = Number(formData.get("id"));
    await prisma.user.delete({
      where: { UserID: id },
    });
    revalidatePath("/"); 
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 fw-bold " style={{ textShadow: "2px 2px 2px lightblue" }}>
        User List
      </h2>

      <Link href={"addUser"}>
        <div tabIndex={0} className="plusButton mb-3">
          <svg className="plusIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
          </svg>
        </div>
      </Link>

      <div className="row">
        {result .map((user:any) => (
          <div key={user.UserID} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body mt-2">
                <p className="card-text alert alert-primary  p-2 ">
                  <strong>Name:</strong> {user.UserName}
                </p>
                <p className="card-text alert alert-primary  p-2 ">
                  <strong>Email:</strong> {user.UserEmail}
                </p>

                <Link href={`/PrismaCrud/${user.UserID}`}>
                  <button className="btn bg-dark-subtle btn-sm">View</button>
                </Link>

                <Link href={`/editUser/${user.UserID}`}>
                  <button className="btn bg-success-subtle btn-sm ms-3 me-3">Edit</button>
                </Link>

                <form action={handleDelete}   >
                  <input type="hidden" name="id" value={user.UserID} />
                  <button type="submit" className="btn bg-danger-subtle btn-sm">
                    Delete
                  </button>

                </form> 
                                 {/* <Link href={'/getAllPrisma'}><button onClick={()=>{handleDelete}}></button></Link>   */}

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
