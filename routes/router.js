const express=require('express')
const usercontroller=require("../controllers/UserController")
const  router= require('express').Router();

router.get("/",(req,res,next)=>{
    res.send("diana")
     })
router.get("/allusers",usercontroller.getalluser)


 module.exports=router