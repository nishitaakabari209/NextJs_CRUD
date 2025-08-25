import { PrismaClient } from "@/generated/prisma";
import { NextApiRequest,NextApiResponse } from "next";
const prisma=new PrismaClient();

export default async function DeleteUser(req:NextApiRequest,res:NextApiResponse) {
    try {
        const {id}=req.query;
        if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }
        const deleted=await prisma.user.delete({
            where:{
                UserID:Number(id)
                
            }
        })
        res.status(200).json({"Message":"User Deleted successfully",deleted})
        
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong",details:error });
    }
    
}