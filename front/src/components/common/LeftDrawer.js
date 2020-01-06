import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { MenuList, MenuItem, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    //   top: false,
    left: false
    //   bottom: false,
    //   right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      <MenuList>
        <MenuItem component={Link} to={"/today"}>
          <Typography className={classes.menulist}>Today</Typography>
        </MenuItem>
        <MenuItem component={Link} to={"/tomorrow"}>
          <Typography className={classes.menulist}>Tomorrow</Typography>
        </MenuItem>
        <MenuItem component={Link} to={"/important"}>
          <Typography className={classes.menulist}>Important</Typography>
        </MenuItem>
        <MenuItem component={Link} to={"/seven"}>
          <Typography className={classes.menulist}>Next Seven days</Typography>
        </MenuItem>
        <MenuItem component={Link} to={"/someday"}>
          <Typography className={classes.menulist}>Someday</Typography>
        </MenuItem>
      </MenuList>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon style={{ color: "white" }} />
        </IconButton>
      </Button>

      {/* <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
          <Button onClick={toggleDrawer('top', true)}>Open Top</Button>
          <Button onClick={toggleDrawer('bottom', true)}>Open Bottom</Button> */}
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
      {/* <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
            {fullList('top')}
          </Drawer>
          <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
            {fullList('bottom')}
          </Drawer>
          <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
            {sideList('right')}
          </Drawer> */}
    </div>
  );
}
