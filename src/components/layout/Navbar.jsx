import React from "react";
import {
  AppBar,
  makeStyles,
  InputBase,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Divider,
} from "@material-ui/core";

/* material icon */
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import RefreshSharpIcon from "@material-ui/icons/RefreshSharp";
import ViewStreamSharpIcon from "@material-ui/icons/ViewStreamSharp";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  iconContainer: {
    marginLeft: 14,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    width: 26,
    heigth: 26,
  },
  brandStyle: {
    color: "#5F6368",
    fontWeight: 400,
    fontSize: "1.4rem",
    lineHeight: 1.334,
    letterSpacing: "0em",
    paddingLeft: 8,
    paddingRight: 8,
  },
  searchContainer: {
    color: "#F1F3F4",
    margin: "auto",
    width: "50%",
    padding: 2,
  },
  searchStyle: {
    border: 0,
    width: 600,
  },
  optionsContainer: {
    marginRight: 20,
  },
  avatarStyle: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));
function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        position="fixed"
        color="primary"
        className={classes.appBar}
        elevation={0}
      >
        <Toolbar>
          <MenuSharpIcon />
          <img
            src="keep-icon.png"
            alt="icon"
            className={classes.iconContainer}
          />
          <Typography className={classes.brandStyle}>Keep</Typography>

          <div className={classes.searchContainer}>
            <InputBase
              placeholder="Search"
              variant="outlined"
              className={classes.searchStyle}
            />
          </div>
          <div className={classes.optionsContainer}>
            <IconButton>
              <RefreshSharpIcon />
            </IconButton>
            <IconButton>
              <ViewStreamSharpIcon />
            </IconButton>
            <IconButton>
              <SettingsSharpIcon />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <AppsSharpIcon />
            </IconButton>
            <IconButton>
              <Avatar
                alt="avatar image"
                src="avatar-ikj.jpg"
                className={classes.avatarStyle}
              />
            </IconButton>
          </div>
        </Toolbar>
        <Divider />
      </AppBar>
    </div>
  );
}

export default Navbar;
