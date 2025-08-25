import { PrismaClient } from "@/generated/prisma";
import { redirect } from "next/navigation";

const AddUser = () => {
  const addUser = async (formData: FormData) => {
    "use server";

    const obj = {
      UserName: formData.get("UserName"),
      UserEmail: formData.get("UserEmail"),
      UserPassword: formData.get("UserPassword"),
      phone: formData.get("phone"),
      age: formData.get("age") ? Number(formData.get("age")) : null,
      isActive: formData.get("isActive") === "on" ? true : false,
    };

    const prisma = new PrismaClient();
    await prisma.user.create({
      data: obj as any,
    });
console.log(obj);
    redirect("/getAllPrisma");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-header bg-primary-subtle text-dark text-center py-3 fs-4 fw-semibold">
 Add User
            </div>
            <form action={addUser}>
              <div className="card-body p-4">
                <div className="mb-3">
                  <label className="form-label">
                   User Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="UserName"
                    required
                    className="form-control"
                    placeholder="Enter user name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="UserEmail"
                    required
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <i className="bi bi-lock-fill me-2"></i>Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="UserPassword"
                    required
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <i className="bi bi-calendar3 me-2"></i>Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    min="0"
                    className="form-control"
                    placeholder="Enter age"
                  />
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    name="isActive"
                    defaultChecked
                  />
                  <label className="form-check-label">
                    <i className="bi bi-check-circle-fill me-2"></i>Active User
                  </label>
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn bg-primary-subtle border border-primary  d-flex align-items-center justify-content-center gap-2"
                  >
                    <i className="bi bi-save-fill"></i> Save User
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
