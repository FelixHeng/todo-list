const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");
const cors = require("cors");
// we import a path module, already in the nodejs, no need to install
// this is to deal with the route path when we want to deploy on heroku
const path = require("path");

require("./routes/auth/passport-setup");

const app = express();
// process.env.PORT : we telling to heroku we want our port number to be whatever heroku gives us and if it's not available like when we run it locally it will be 5000
const PORT = process.env.PORT || 5000;
const authRouter = require("./routes/auth/auth.js");
const todoRouter = require("./routes/todo/todo");
const allRouter = require("./routes/todo/all");
const todayRouter = require("./routes/todo/today");
const tomorrowRouter = require("./routes/todo/tomorrow");
const sevendaysRouter = require("./routes/todo/sevendays");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.use("/auth", authRouter);
app.use("/todo", todoRouter);
app.use("/todo", allRouter);
app.use("/todo", todayRouter);
app.use("/todo", tomorrowRouter);
app.use("/todo", sevendaysRouter);
app.get("/profile", passport.authenticate("jwt", { session: false }), function(
  req,
  res
) {
  res.send(req.user);
});

// // Serve static assets if in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   // to load the index.html in front/build when npm run build in front
//   // we are setting the static folder here
//   app.use(express.static("../front/build"));
//   // we want any request which not matching the middleware Route up there
//   // and should load the static index.html
//   // now we go to the package.json file and create the post build script
//   // to not run the build script if it is in production wo we'll set it to false
//   // we want to make sure it is in the front folder, so we use --prefixe

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "front", "build", "index.html"));
//   });
// }

//  "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix front && npm run build --prefix front"

app.get("/", (req, res) => {
  res.json({
    message: "WELCOME MY FRIENDS"
  });
});

app.post("/post", (req, res) => {
  res.json({
    message: "post created"
  });
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
