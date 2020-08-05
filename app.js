const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const errorController = require("./controllers/error");
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(5000, () => {
  console.log("app is running on port 5000");
});
