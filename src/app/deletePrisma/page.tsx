import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DeleteUser({ params }: { params: { UserID: string } }) {
  try {
    const userId = Number(params.UserID);

    await prisma.user.delete({
      where: { UserID: userId },
    });

    return NextResponse.json({success:true, message: "User deleted" });
  } catch (error: any) {
    console.error("Delete error:", error);
    return NextResponse.json({ success: false, message: "Delete failed" }, { status: 500 });
  }
}
