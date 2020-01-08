import React from "react";
import TodoBar from "../components/common/TodoBar";
import { Link } from "react-router-dom";
import { Grid, Paper, TextField, Box, Button } from "@material-ui/core";

function Login() {
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
                Signin
              </h1>
              <form style={{ textAlign: "center" }}>
                <TextField type="email" name="email" label="email" />
                <br />
                <br />
                <TextField type="password" name="password" label="password" />
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
                >
                  Submit
                </Button>
                {/* </Link> */}
              </form>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
