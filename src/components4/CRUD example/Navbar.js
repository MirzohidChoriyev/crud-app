import React from "react";
import {
  Toolbar,
  AppBar,
  Link,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  margin: {
    margin: "0px 4px",
    background: "royalblue",
    color: "white",
  },
  bgcolor: {
    background: "black",
  },
});

function Navbar() {
  const classes = useStyle();
  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.bgcolor}>
          <NavLink to="/" exact>
            <Button
              size="small"
              variant="contained"
              color="success"
              className={classes.margin}
              to="/"
            >
              Home
            </Button>
          </NavLink>
          <NavLink to="/all" exact>
            <Button
              size="small"
              variant="contained"
              color="success"
              className={classes.margin}
              to="/all"
            >
              All users
            </Button>
          </NavLink>
          <NavLink to="/add" exact>
            <Button
              size="small"
              variant="contained"
              color="success"
              className={classes.margin}
              to="/add"
            >
              Add users
            </Button>
          </NavLink>
          <NavLink to="/add" exact>
            <Button
              size="small"
              variant="contained"
              color="primary"
              className={classes.margin}
              onClick={() => {
                window.open(`http://localhost:3003/users`, "_blank");
              }}
            >
              Json file
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
