import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

//app confog
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//Db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on https://localhost:${port}`)
})


// mongodb+srv://saurbhsrivastav6_db_user:Aman9315596497@cluster0.jlzghcs.mongodb.net/?appName=Cluster0