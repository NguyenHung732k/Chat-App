import express from "express"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"

import dotenv from "dotenv"

const app = express()
dotenv.config()

const PORT = process.env.PORT || 5001

app.use(cookieParser()) // For parsing cookies
app.use(express.json()) // For parsing application/json

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})