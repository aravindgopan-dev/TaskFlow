import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient();

export const getProject =async(
    req:Request,
    res:Response):Promise<void>=>{
    try{
        const projects= await prisma.project.findMany();
        res.json(projects);
    }
    catch(error){
       res.status(500).json({message:"Error retriving projects"})
    }
}


export const createProject =async(
    req:Request,
    res:Response):Promise<void>=>{
        const {name,description,startDate,endDate} =req.body;
        try{
            const newproject= await prisma.project.create({
                data:{
                    name,
                    description,
                    startDate,
                    endDate
                }
            })
            res.status(200).json(newproject)
        }
        catch(error:any){
        res.status(500).json({message:`Error creating projects ${error.message} `})
        }
}