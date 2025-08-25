import { PrismaClient } from "@/generated/prisma";
import { NextApiRequest ,NextApiResponse } from "next";

const prisma=new PrismaClient();
export default async function GetUserByID(req:NextApiRequest,res:NextApiResponse) {
    try {
        const {id}=req.query;
     if(!id){
       return res.status(400).json({"Error":"UserID not found,Please give the userid"})
     }
        const getUser=await prisma.user.findUnique({
            where:{
                UserID:Number(id)
            }
        })
        if (!getUser) {
      return res.status(404).json({ error: `User with ID ${id} not found or already deleted` });
    }
        res.status(200).json({"Message":"User Find successfully",getUser})
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" });
    }
    
}
