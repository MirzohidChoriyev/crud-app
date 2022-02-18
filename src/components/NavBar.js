import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Box,
} from "@material-ui/core";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "darkorange",
  },
  tabs: {
    color: "white",
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
  },
});

function NavBar() {
  const classes = useStyle();
  return (
    <div>
      <AppBar className={classes.header} position="static">
        <Toolbar variant="dense">
          <NavLink to="/" exact className={classes.link}>
            <Button variant="text" className={classes.tabs}>
              Interview
            </Button>
          </NavLink>
          <NavLink to="/all" exact className={classes.link}>
            <Button variant="text" className={classes.tabs}>
              All users
            </Button>
          </NavLink>
          <NavLink to="/add" exact className={classes.link}>
            <Button variant="text" className={classes.tabs}>
              Add users
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
