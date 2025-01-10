import express, { response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/connectDB.js';
import userRouter from './route/user.route.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet({
    crossOriginEmbedderPolicy: false
}));

// Define PORT
const PORT = process.env.PORT || 8080;

// Routes
app.get('/', (request, response) => {
    response.json({ message: "Hi Bro Server is running "+ PORT });
})

app.use('/api/register', userRouter);

connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})

