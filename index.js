const fs = require("fs");
const express = require("express");
const path=require("path");
const dirName=path.join(__dirname,"timeStamps")
const app=express();
app.get("/",(req,res)=>{
    res.send("Hey this is my first web server")
})
app.get("/date-time",(req,res)=>{
    let date=new Date();
    let currentTimeStamp=date.toUTCString().slice(0,-3);
    let content=`The last updated timestamp : ${currentTimeStamp}`;
    console.log(dirName);
    
    fs.writeFile(`${dirName}/date-time.txt`,content,(err)=>{
        if(err){
            res.send("Error in writing the file")
            return
        }
        res.sendFile(path.join(dirName,"date-time.txt"))
     }
    )
}
)
app.listen(9000,()=>console.log(`Server started in localhost:9000`));