import { makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "./layout/Navbar.jsx";
import Sidebar from "./layout/Sidebar.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  page: {
    width: "100%",
    padding: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
}));

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Sidebar />
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
