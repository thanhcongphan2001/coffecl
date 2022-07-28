const newRouter = require("./login");
const site = require("./site");
const product =require("./product")
const admin =require("./admin")
function route(app) {
  app.use("/admin",admin)
  app.use("/product", product)
  app.use("/login", newRouter);
  app.use("/", site);
}
module.exports = route;
