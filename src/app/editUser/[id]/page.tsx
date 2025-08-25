import { PrismaClient } from '@/generated/prisma';
import React from 'react';
import { redirect } from 'next/navigation';

const page = async ({params}:{params: Promise<{id:number}> }) => {
const {id}=await params;
const prisma=new PrismaClient();
const user=await prisma.user.findUnique({where:{ UserID:Number(id) } });

    if (!user) {
        return <div className="p-5 text-danger">User not found!</div>;
    }
    async function updateUser(formData: FormData) {
        "use server";
        const prisma = new PrismaClient();

        const data = {
            UserName: String(formData.get("UserName")),
            UserEmail: String(formData.get("UserEmail")),
            phone: formData.get("phone") ? String(formData.get("phone")) : null,
            age: formData.get("age") ? Number(formData.get("age")) : null,
            isActive: formData.get("isActive") === "true",
        };

        await prisma.user.update({
            where: { UserID: Number(id) },
            data,
        });

        redirect("/getAllPrisma");
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg border-0 rounded-4 mb-5">
                        <div className="card-header bg-primary-subtle text-dark text-center">
                            <h3 className="mb-0">Edit User</h3>
                        </div>
                        <form action={updateUser}>
                            <div className="card-body p-4">
                                <div className="mb-3">
                                    <label className="form-label">Name *</label>
                                    <input
                                        type="text"
                                        name="UserName"
                                        defaultValue={user.UserName}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email *</label>
                                    <input
                                        type="email"
                                        name="UserEmail"
                                        defaultValue={user.UserEmail}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        defaultValue={user.phone ?? ""}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Age</label>
                                    <input
                                        type="number"
                                        name="age"
                                        defaultValue={user.age ?? ""}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Active Status</label>
                                    <div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="isActive"
                                                value="true"
                                                defaultChecked={user.isActive}
                                            />
                                            <label className="form-check-label">Active</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="isActive"
                                                value="false"
                                                defaultChecked={!user.isActive}
                                            />
                                            <label className="form-check-label">Inactive</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button
                                    type="submit"
                                    className="btn bg-primary-subtle border border-primary px-5"
                                >
                                    Update User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
