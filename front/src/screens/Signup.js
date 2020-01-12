import React, { useState } from "react";
import TodoBar from "../components/common/TodoBar";
import { Link } from "react-router-dom";
import {
  Grid,
  TextField,
  Box,
  Button,
  Snackbar,
  Slide
} from "@material-ui/core";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [open, setOpen] = useState(false);
  const [flash, setFlash] = useState("");
  const [error, setError] = useState(false);

  const signup = event => {
    const body = {
      email: email,
      password: password,
      name: name,
      lastname: lastname,
      open: open,
      flash: flash,
      error: error
    };

    console.log(body);

    axios.post("http://localhost:5000/auth/signup", body).then(
      res => setFlash(res.data.flash),
      res => console.log("errroooooo", res)
      // err => setFlash(err.data.flash),

      // res => console.log("resss", res.data.flash),
      // res => console.log("data", res.flash),
      // res => console.log("flash", res.data.flash),
    );
    setOpen(true);
    event.preventDefault();
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(flash);
  return (
    <div>
      <TodoBar />
      <Grid container justify="center" style={{ height: "100%" }}>
        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "5rem 2rem 2rem 2rem",
              backgroundColor: "#ffedcd"
            }}
          >
            <Box
              justify={"center"}
              border={1}
              borderRadius={15}
              style={{
                padding: "1rem 2rem 3rem 2rem",
                backgroundColor: "white"
              }}
            >
              <h1
                style={{
                  fontFamily: "Poiret One",
                  color: "#0D5FAD",
                  textAlign: "center"
                }}
              >
                Sign up
              </h1>
              <Snackbar
                open={open}
                onClose={handleClose}
                autoHideDuration={6000}
              >
                {error ? (
                  <Alert onClose={handleClose} severity="error">
                    {flash}
                  </Alert>
                ) : (
                  <Alert onClose={handleClose} severity="success">
                    {flash}
                  </Alert>
                )}
              </Snackbar>

              <form style={{ textAlign: "center" }} onSubmit={signup}>
                <TextField
                  type="email"
                  name="email"
                  label="email"
                  onChange={e => setEmail(e.target.value)}
                />
                <br />
                <br />
                <TextField
                  type="password"
                  name="password"
                  label="password"
                  onChange={e => setPassword(e.target.value)}
                />
                {/* <br />
                <br />
                <TextField
                  type="password"
                  name="passwordbis"
                  label="confirm password"
                /> */}
                <br />
                <br />
                <TextField
                  type="text"
                  name="name"
                  label="name"
                  onChange={e => setName(e.target.value)}
                />
                <br />
                <br />
                <TextField
                  type="text"
                  name="lastname"
                  label="lastname"
                  onChange={e => setLastname(e.target.value)}
                />
                <br />
                <br />
                {/* <Link to={"/"} type="submit" value="Submit"> */}
                <Button
                  variant="outlined"
                  justify="center"
                  style={{
                    marginTop: "2rem",
                    color: "#0D5FAD",
                    borderColor: "#0D5FAD",
                    fontWeight: "bolder"
                  }}
                  onClick={signup}
                >
                  Submit
                </Button>
                {/* </Link> */}
              </form>
              <br />
              <Box style={{ color: "#717D7E", textAlign: "center" }}>
                Already have an account ?
                <br />
                <Link to={"/login"}>
                  <Button>Login</Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;
