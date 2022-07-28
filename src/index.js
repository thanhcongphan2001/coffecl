const express = require("express");
<<<<<<< HEAD
// const morgan = require("morgan");
=======
>>>>>>> 9dd90aa2111e9f2c880fab19babeb6d2ab8c9db6
//
const path = require("path");
const { engine } = require("express-handlebars");
//
const app = express();
<<<<<<< HEAD
const port =process.env.PORT || 3000;
=======
// const port =process.env.PORT || 3000;
var server_port = process.env.YOUR_PORT || process.env.PORT || 3002;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
>>>>>>> 9dd90aa2111e9f2c880fab19babeb6d2ab8c9db6

const route = require("./routes");

const methodoverride =require('method-override')
app.use(methodoverride('_method'))
// const db=require("./config/db")
// HTTP Logger

//db
// db.connect();

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

<<<<<<< HEAD
app.listen(port, () => {
  console.log(`Example app listening ${port}`);
});
=======
// app.listen(port, () => {
//   console.log(`Example app listening ${port}`);
// });

server.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
>>>>>>> 9dd90aa2111e9f2c880fab19babeb6d2ab8c9db6
