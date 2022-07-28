const express = require("express");
const morgan = require("morgan");
//
const path = require("path");
const { engine } = require("express-handlebars");
//
const app = express();
const port = process.env.PORT ||3000;
const route = require("./routes");

const methodoverride =require('method-override')
app.use(methodoverride('_method'))
const db=require("./config/db")
// HTTP Logger
// app.use(morgan('combined'));

//db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({
  extended:true
}))
// Template Engine
app.engine(
  "hbs",
  engine({
    extname: "hbs",
    helpers:{
      sum:(a,b)=>a+b,
    }
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, 'resources' , 'views'));

route(app);
app.get("/cc",function(req,res,nex){
  req.age='18'
 console.log(req.age);
 res.send('cccc')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
