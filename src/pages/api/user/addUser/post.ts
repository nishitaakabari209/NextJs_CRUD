
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
        const {UserName,UserEmail,UserPassword,age,phone,isActive}=req.body;
      const post = await prisma.user.create({
        data: {
          UserName,
          UserEmail,
          UserPassword,
          age,
          phone,
          isActive
        },
      });

      res.status(200).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
