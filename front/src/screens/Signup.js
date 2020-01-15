import React, { useState } from "react";
import TodoBar from "../components/common/TodoBar";
import { Link } from "react-router-dom";
import {
  Grid,
  TextField,
  Box,
  Button,
  Snackbar,
  FormControl
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

    axios.post("http://localhost:5000/auth/signup", body).then(res => {
      console.log(res);
      setFlash(res.data.flash);
      if (res.data.err === true) setError(true);
      else setError(false);
    });
    setOpen(true);
    event.preventDefault();
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(flash);
  return (
    <div>
      <TodoBar auth={null} />
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
              padding: "5rem 2rem 1rem 2rem",
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

              <FormControl
                style={{ textAlign: "center", flexDirection: "column" }}
              >
                <TextField
                  type="email"
                  name="email"
                  label="email"
                  onChange={e => setEmail(e.target.value)}
                  style={{ marginTop: "1rem", marginBottom: "1rem" }}
                />
                <TextField
                  type="password"
                  name="password"
                  label="password"
                  onChange={e => setPassword(e.target.value)}
                  style={{ marginTop: "1rem", marginBottom: "1rem" }}
                />
                <TextField
                  type="text"
                  name="name"
                  label="name"
                  onChange={e => setName(e.target.value)}
                  style={{ marginTop: "1rem", marginBottom: "1rem" }}
                />
                <TextField
                  type="text"
                  name="lastname"
                  label="lastname"
                  onChange={e => setLastname(e.target.value)}
                  style={{ marginTop: "1rem", marginBottom: "1rem" }}
                />
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
              </FormControl>
              <Box
                style={{
                  color: "#717D7E",
                  textAlign: "center",
                  marginTop: "1rem"
                }}
              >
                Already have an account ?
                <Box>
                  <Link to={"/login"}>
                    <Button>Login</Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;
