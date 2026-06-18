const express = require("express");
require("dotenv").config();

const  userRouter = require("./src/routes/routes")

const app = express();
app.use(express.json());

const PORT = process.env.PORT

app.use("/", userRouter)

app.get("/", (req,res)=>{
    res.send("server Running")
})


app.listen(PORT, ()=>{
    console.log(`server is running localhost:${PORT}` )
})