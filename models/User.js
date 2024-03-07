const db=require("../config/db")

class UserModel{
  static  async getusers(){

 return new Promise(resolve=>{
    db.query("select * from users",[],(error,results)=>{
        if(!error)
resolve(results)
    })
 

    })
}
}
module.exports=UserModel 
