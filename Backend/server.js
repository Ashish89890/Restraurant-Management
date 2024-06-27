import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routs/foodRoute.js"
import userRouter from "./routs/userRoute.js"
import cartRouter from "./routs/cartRoute.js"
import 'dotenv/config'

//app config
const app = express()
const port = 5000
//middleware
app.use(express.json())
app.use(cors())
// db connect 
connectDB();
//api endpoints
app.use("/api/food", foodRouter)
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)



app.use("/images",express.static('uploads'))
app.get("/", (req, res) => {
    res.send("API working")
})
app.listen(port, () => {
    console.log(`server started on port number ${port}`)
})
