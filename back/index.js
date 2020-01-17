const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");
const cors = require("cors");

require("./routes/auth/passport-setup");

const app = express();
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