const login =require("../models/login")
const course =require("../models/course")
class Newscontroller {
    //[get]/news
    index(req,res){
    res.render('login')
    }
    show(req,res,next){
        login.findOne({
            username :req.body.email,
            pass :req.body.pass
        })
        .then(data=>{
            if(data){
                res.redirect(307,'/admin')
            }
           else{
             
                res.render('login')
           }
        }
        
        )
        .catch(next); 
    }
    
}
module.exports =new Newscontroller();