import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectdb } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js"
import cors from 'cors'
import path from 'path'
const app=express();
const __dirname=path.resolve()
if(process.env.NODE_ENV!=="production"){
    app.use(cors(
    {origin:"http://localhost:5173",}
));
}
app.use(express.json());
app.use((req,res,next)=>{
    console.log(`req method is ${req.method} `);
    next();
})
// app.use(rateLimiter);
app.use("/api/notes", notesRoutes);


if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

app.get(/.*/,(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
})
}
connectdb().then(()=>{
app.listen(5000,()=>{
    console.log("server started @ http://localhost:5000");
})
})


