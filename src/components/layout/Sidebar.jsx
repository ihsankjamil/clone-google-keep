import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

import EmojiObjectsSharpIcon from "@material-ui/icons/EmojiObjectsSharp";
import NotificationsNoneSharpIcon from "@material-ui/icons/NotificationsNoneSharp";
import EditSharpIcon from "@material-ui/icons/EditSharp";
import ArchiveSharpIcon from "@material-ui/icons/ArchiveSharp";
import DeleteOutlineSharpIcon from "@material-ui/icons/DeleteOutlineSharp";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    border: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    border: 0,
  },
  drawerContainer: {
    overflow: "auto",
  },
  iconSideMenu: {
    marginLeft: 10,
    width: 26,
    height: 26,
  },
}));
function Sidebar() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "Notes",
      icon: <EmojiObjectsSharpIcon />,
      path: "/notes",
    },
    {
      text: "Reminders",
      icon: <NotificationsNoneSharpIcon />,
      path: "/reminders",
    },
    {
      text: "Edit Labels",
      icon: <EditSharpIcon />,
      path: "/label",
    },
    {
      text: "Archive",
      icon: <ArchiveSharpIcon />,
      path: "/archive",
    },
    {
      text: "Trash",
      icon: <DeleteOutlineSharpIcon />,
      path: "/trash",
    },
  ];
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => history.push(item.path)}
                onMouse
                className={
                  location.pathname === item.path ? classes.active : null
                }
              >
                <ListItemIcon className={classes.iconSideMenu}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>
                  <Typography>{item.text}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Sidebar;
