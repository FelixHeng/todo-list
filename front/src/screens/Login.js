import React from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, TextField } from "@material-ui/core";

function Login() {
  return (
    <div>
      <Grid container alignItems="center" style={{ height: "100%" }}>
        <Grid item xs={12}>
          <Paper elevation={4} style={{ margin: "10rem 20rem 0 20rem" }}>
            <Grid
              container
              alignItems="center"
              justify="center"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "5rem"
              }}
            >
              <h1>Signin</h1>
              <form>
                <TextField type="email" name="email" label="email" />
                <br />
                <br />
                <TextField type="password" name="password" label="password" />
                <br />
                <br />
                <Link to={"/profile"} type="submit" value="Submit">
                  Submit
                </Link>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
