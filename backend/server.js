import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import porductRouter from "./routes/productRoute.js";

// App Config
const app = express()
const port = 4000 || process.env.PORT;
connectDb()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', porductRouter)


app.listen(port, () => console.log("Server started on PORT : " + port))