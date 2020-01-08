import React, { useState } from "react";
import TodoBar from "../components/common/TodoBar";
import { Link } from "react-router-dom";
import { Grid, Paper, TextField } from "@material-ui/core";

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
              padding: "5rem",
              backgroundColor: "#ffedcd"
            }}
          >
            <h1 style={{ fontFamily: "Poiret One", color: "#0D5FAD" }}>
              Signup
            </h1>
            <form>
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
              <Link to={"/"} type="submit" value="Submit">
                Submit
              </Link>
            </form>
            <br />
            <div>
              Already an account ? <Link to={"/login"}> Login</Link>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;
