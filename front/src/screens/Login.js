import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoBar from "../components/common/TodoBar";
import { Link, Router } from "react-router-dom";
import {
  Grid,
  Paper,
  TextField,
  Box,
  Button,
  FormControl
} from "@material-ui/core";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState(localStorage.getItem("id"));

  const login = () => {
    const body = {
      email: email,
      password: password
    };
    console.log("Login bodyyyy", body);
    axios.post("http://localhost:5000/auth/login", body).then(res => {
      // console.log("res dataaaa", res.data);
      const token = res.data.token;
      // console.log("token", res.data.token);
      const getId = res.data.user.id;
      localStorage.setItem("id", getId);
      // console.log("user iddd", userId);
      localStorage.setItem("token", token);
      window.location.reload();
      // console.log("token in the local storage", localStorage.getItem("token"));
    });
  };

  return (
    <div>
      <TodoBar auth={loggedIn} />
      <Grid container justify="center">
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
                Sign in
              </h1>
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
                {/* <Link to={"/profile"}> */}
                <Button
                  variant="outlined"
                  justify="center"
                  style={{
                    marginTop: "2rem",
                    color: "#0D5FAD",
                    borderColor: "#0D5FAD",
                    fontWeight: "bolder"
                  }}
                  onClick={login}
                  component={Link}
                  to={"/"}
                >
                  Submit
                </Button>
                {/* </Link> */}
              </FormControl>
              <Box
                style={{
                  textAlign: "center",
                  color: "#717D7E",
                  marginTop: "1rem",
                  marginBottom: "1rem"
                }}
              >
                don't have an account yet ?
                <Box>
                  <Link to={"/signup"}>
                    <Button>Sign up</Button>
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

export default Login;
