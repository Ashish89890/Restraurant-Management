import express from "express"
import { loginUser, regUser } from "../controllers/usercontroller.js"

const userRouter = express.Router()
userRouter.post("/register",regUser)
userRouter.post("/login", loginUser)
export default userRouter