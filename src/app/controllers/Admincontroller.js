const course = require("../models/course");

class Newscontroller {
  //[get]/news
  index(req, res) {
    res.render("admin");
  }
  store(req, res) {
    const product = new course(req.body);
    product.save().then(() => res.redirect(307,"/admin"));
  }
  create(req, res) {
  res.render('create')
  }
  admin(req,res,next){
    Promise.all([ course.find({}), course.countDocumentsDeleted()])
    .then(([courses,deletecount])=>
    {
      courses =courses.map(course =>course.toObject())
      res.render('admin',{deletecount,courses})
    }
    )
    .catch(next)
  }
  edit(req,res,next){
    course.findById(req.params.id)
    .then((courses)=>{
      courses =courses ? courses.toObject() :courses
  res.render('edit',{courses})
  })
.catch(next)
  }
  update(req,res,next){
    console.log(req.body)
    course.updateOne({_id:req.params.id} ,req.body)
    .then(()=>res.redirect(307,"/admin"))
    .catch(next)
  }
  delete(req,res,next){
    // console.log(req.params.id)
    course.delete({_id:req.params.id})
    .then(()=>res.redirect(307,"/admin"))
    .catch(next)
  }
  trash(req,res,next){
    course.findDeleted({delete:true})
    .then(courses =>{
      courses =courses.map(course =>course.toObject())
      res.render('trash',{courses})
     })
    .catch(next)
  }
  restore(req,res,next){
    course.restore({_id:req.params.id})
    .then(()=>res.redirect("/admin/trash"))
    .catch(next)
  }
  forcedestroy(req,res,next){
    course.deleteOne({_id:req.params.id})
    .then(()=>res.redirect("/admin/trash"))
    .catch(next)
  }
}
module.exports = new Newscontroller();
