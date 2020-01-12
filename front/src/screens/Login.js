import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoBar from "../components/common/TodoBar";
import { Link } from "react-router-dom";
import { Grid, Paper, TextField, Box, Button } from "@material-ui/core";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);

  const login = () => {
    const body = {
      email: email,
      password: password
    };
    console.log(body);
    axios.post("http://localhost:5000/auth/login", body).then(res => {
      console.log("resss", res.data.token);
      console.log(res.data);
      const token = res.data.token;
      localStorage.setItem("token", token);
      console.log("token", localStorage.getItem("token"));
    });
  };

  return (
    <div>
      <TodoBar />
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
              <form style={{ textAlign: "center" }}>
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
                <br />
                <br />
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
                >
                  Submit
                </Button>
                {/* </Link> */}
              </form>
              <br />
              <br />
              <Box style={{ textAlign: "center", color: "#717D7E" }}>
                don't have an account yet ?
                <br />
                <Link to={"/signup"}>
                  <Button>Sign up</Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
