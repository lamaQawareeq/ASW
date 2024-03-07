  const express=require('express')
 const application =express();
 const mydb=require ('./config/db')
const rout=require("./routes/router")
 application.use(rout)


  application.listen(3001,()=>{
    console.log('server is running now  ')
  }
)




   
