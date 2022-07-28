const course =require("../models/course")

class Productcontroller {
    //[get]/product/:slug



    show(req,res,next){
        course.findOne({name :req.params.slug})
        .then((courses)=>{
            courses =courses ? courses.toObject() :courses


        res.render('product/show',{courses})
        })
        .catch(next); 
    }
  
}
module.exports =new Productcontroller();