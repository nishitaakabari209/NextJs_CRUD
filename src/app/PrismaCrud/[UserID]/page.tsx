import { PrismaClient } from "@/generated/prisma";
import { Link } from "lucide-react";

const prisma = new PrismaClient();

const GetByID = async ({ params }: { params: { UserID: string } }) => {
  const userId = Number(params.UserID);

  const data = await prisma.user.findUnique({
    where: { UserID: userId },
  });

  if (!data) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="alert alert-danger text-center fs-5 fw-bold shadow">
          User not found
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow-lg border-0 rounded-4" style={{ width: "26rem" }}>
        <div className="card-header text-dark text-center fs-4 fw-bold"
  >
         User Profile
        </div>
        <div className="card-body p-4">
          <div className="alert alert-primary d-flex align-items-center mb-3">
            <div>
              <strong>Name:</strong> {data.UserName}
            </div>
          </div>
          <div className="alert alert-success d-flex align-items-center mb-3">
            <div>
              <strong>Email:</strong> {data.UserEmail}
            </div>
          </div>
         <div className="alert alert-success d-flex align-items-center mb-3">
            <div>
              <strong>Age:</strong> {data.age}
            </div>
          </div>
          <div className="alert alert-success d-flex align-items-center mb-3">
            <div>
              <strong>Phone:</strong> {data.phone}
            </div>
          </div>
        </div>
        <div className="card-footer text-center bg-light">
           {/* <Link href={"/editUser/"+data.UserID}>
           <button className='btn btn-outline-success btn-sm ms-3 me-3'>Edit</button>
           </Link>  */}
          <button className="btn btn-outline-danger">
          Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetByID;
