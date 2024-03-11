import express from 'express';
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authroutes from "./routes/authroutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import {fileUrlToPath} from 'url'; 
// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,'./asianalifestyle/build')))
//routes
app.use("/api/v1/auth", authroutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
// es module fix
const __filename = fileUrlToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//databse config
connectDB();

app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,'./asianalifestyle/build/index.html'));
})

app.listen(PORT, () => {
  console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
