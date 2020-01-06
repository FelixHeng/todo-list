const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const connection = require("../helpers/db");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false
    },
    (email, password, done) => {
      console.log("email : ", email);
      console.log("password : ", password);
      const queryString = "SELECT * FROM users WHERE email= (?)";
      connection.query(queryString, email, (err, results, fields) => {
        // results.length < 1, parceque ca renvoi un array vide, sinon ca va mettre cannot read property 'password' of undefined
        if (err || results.length < 1) {
          return done(null, false, { flash: "That email is not registered" });
        }
        bcrypt.compare(password, results[0].password, (err, isMatch) => {
          if (isMatch) {
            return done(null, results[0]);
          } else {
            return done(null, false, { flash: "Password incorrect" });
          }
        });
      });
    }
  )
);

//
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const queryString = "SELECT * FROM users WHERE id=(?)";
  connection.query(queryString, id, (err, results, fields) => {
    return done(err, results[0]);
  });
});

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "your_jwt_secret"
    },

    function(jwtPayload, cb) {
      return cb(null, jwtPayload);
    }
  )
);

module.exports = passport;
