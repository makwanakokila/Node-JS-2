const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/rakhi")

const db= mongoose.connection

db.on("connected",(err,data)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("database connected")
}
})