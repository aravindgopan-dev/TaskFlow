import { Router } from "express";
import { getTasks } from "../controllers/taskControlller";



const router=Router()

router.get("/",getTasks)



export default router
