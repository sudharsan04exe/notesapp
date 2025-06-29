import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectdb } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js"
import cors from 'cors'
const app=express();

app.use(cors(
    {origin:"http://localhost:5173",}
));
app.use(express.json());
app.use((req,res,next)=>{
    console.log(`req method is ${req.method} `);
    next();
})
// app.use(rateLimiter);
app.use("/api/notes", notesRoutes);



connectdb().then(()=>{
app.listen(5000,()=>{
    console.log("server started @ http://localhost:5000");
})
})


