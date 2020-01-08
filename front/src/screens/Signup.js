import React, { useState } from "react";
import TodoBar from "../components/common/TodoBar";
import { Link } from "react-router-dom";
import { Grid, Paper, TextField, Box, Button } from "@material-ui/core";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
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
              <form style={{ textAlign: "center" }}>
                <TextField type="email" name="email" label="email" />
                <br />
                <br />
                <TextField type="password" name="password" label="password" />
                <br />
                <br />
                <TextField
                  type="password"
                  name="passwordbis"
                  label="confirm password"
                />
                <br />
                <br />
                <TextField type="text" name="name" label="name" />
                <br />
                <br />
                <TextField type="text" name="lastname" label="lastname" />
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
                >
                  Submit
                </Button>
                {/* </Link> */}
              </form>
              <br />
              <div>
                Already an account ?{" "}
                <Link to={"/login"}>
                  <Button>Login</Button>
                </Link>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;
