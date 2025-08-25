import { PrismaClient } from "@/generated/prisma";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
export default async function UpdateUser(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ "Error": "Userid is required" })
        }
        const { UserName, UserEmail, age, phone,isActive } = req.body;

        const updated = await prisma.user.update({
            where: {
                UserID: Number(id)
            },
            data: {
                UserName,
                UserEmail,
                age,
                phone,
                isActive

            },
        })
        res.status(200).json({"Message":"User updated successfully!!",updated})
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" });
    }

}