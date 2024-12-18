import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient();

export const getTasks =async(
    req:Request,
    res:Response):Promise<void>=>{
    try{
        const {projectId}=req.query
        const tasks= await prisma.task.findMany({
            where:{
                projectId:Number(projectId)
            },
            include:{
                author:true,
                assignee:true,
                attachments:true,
                comments:true
            }
        });
        res.json(tasks);
    }
    catch(error){
       res.status(500).json({message:"Error retriving tasks"})
    }
}





export const createTask =async(
    req:Request,
    res:Response):Promise<void>=>{
        const {
            title,
            description,
            status,
            priority,
            tags,
            startDate,
            endDate,
            dueDate,
            points,
            projectId,
            authorUserId,
            assignedUserId
        } =req.body;
        try{
            const newtask= await prisma.task.create({
                data:{
                    title,
                    description,
                    status,
                    priority,
                    tags,
                    startDate,
                    dueDate,
                    points,
                    projectId,
                    authorUserId,
                    assignedUserId
                }
            })
            res.status(200).json(newtask)
        }
        catch(error:any){
        res.status(500).json({message:`Error creating task ${error.message} `})
        }
}




export const updateTaskStatus =async(
    req:Request,
    res:Response):Promise<void>=>{
    try{
        console.log(req.query);
        const {taskId}=req.params
        const {status}=req.body
        const update= await prisma.task.update({
            where:{
                id:Number(taskId)

            },
           data:{
            status:status
           }
        });
        res.json(update);
    }
    catch(error:any){
       res.status(500).json({message:`Error updating tasks: ${error.message}`});
    } 
}