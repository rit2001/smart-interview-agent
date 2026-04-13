import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/connectDb.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoute.js';
import userRouter from './routes/userRoute.js';
import interviewRouter from './routes/interviewRouter.js';
import paymentRouter from './routes/paymentRoute.js';




dotenv.config();

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

const PORT = process.env.PORT || 6000;

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/interview",interviewRouter)
app.use("/api/payment",paymentRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDb();
});