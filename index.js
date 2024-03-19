const express = require("express")

const app=express();
const path =require("path")

let port=8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
res.render("home.ejs");
})

app.get("/rolldice",(req,res)=>{
    const diceVal =Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceVal});
})
// app.get("/insta/:username",(req,res)=>{
//     const followers = ["amazon","123","mnc","google"];
//   let {username} = req.params;
//   res.render("insta.ejs",{username,followers}) ;
// });
app.get("/insta/:username",(req,res)=>{
    const {username} = req.params;
    const instaData = require("./data.json")
    const data = instaData[username];
    // const following = data.username.following;
    // console.log(data);
    if(data){

        res.render("insta.ejs",{data})
    }
    else{
        res.render("error.ejs")
    }
})
app.listen(port,() =>{
    console.log(`listening at port ${port}`)
})
