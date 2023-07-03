import express,{Express} from "express"
import dotenv from "dotenv"


const app:Express=express()
dotenv.config()

app.get("/",(req,res)=>{
    res.send("merhaba")
})

app.get("/test",(req,res)=>{

    res.send({
        "msg" : "merhaba"
    })
})


app.listen(process.env.PORT || 8000 ,()=>{
    console.log("server is running")
})