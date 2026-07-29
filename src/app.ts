import express, { json, Request, Response} from "express";
import cors from "cors";
import helmet from "helmet";

const app = express()

app.use(cors())
app.use(helmet())
app.use(json())

app.get("/", (req: Request, res:Response)=>{
    res.json({info: "Server health and on"}).status(200)
})


export default app;