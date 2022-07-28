const express = require("express");
const morgan = require("morgan");
//
const path = require("path");
const { engine } = require("express-handlebars");
//
const app = express();
// const port =process.env.PORT || 3000;
const port =8080;
const route = require("./routes");
//   "start": "nodemon --inspect src/index.js",
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

app.listen(port, () => {
  console.log(`Example app listening ${port}`);
});
