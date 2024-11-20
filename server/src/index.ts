import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
/*  ROUTE IMPORTS */



/*  CONFIGURATION  */

dotenv.config()
const app=express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(express.urlencoded({ extended: false }));
app.use(cors())


app.get("/",(req,res)=>{
    res.send("this is home route");
})

const port=process.env.PORT ||3000;

app.listen(port,()=>{
    console.log(`SERVER RUNNING AT PORT :${port}`);
})