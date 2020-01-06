const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");

require("./routes/passport-setup");

const app = express();
const PORT = process.env.PORT || 5000;
const authRouter = require("./routes/auth.js");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
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
