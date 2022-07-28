const course =require("../models/course")

class Sitecontroller {
    //[get]/
    index(req,res, next){
 course.find({})
 .then(courses =>{
     courses =courses.map(course =>course.toObject())
     res.render('home',{courses})
    })
 .catch(next);
    }


    seach(req,res){
        res.render('seach');
    }
  
}
module.exports =new Sitecontroller();