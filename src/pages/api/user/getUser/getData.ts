import { PrismaClient } from "@/generated/prisma";
import { NextApiRequest,NextApiResponse } from "next";

const prisma=new PrismaClient();
export default async function GetData(req:NextApiRequest,res:NextApiResponse) {
    try {
     const data=await prisma.user.findMany();
    res.status(200).json(data);
        
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" });
    }
   
    
}