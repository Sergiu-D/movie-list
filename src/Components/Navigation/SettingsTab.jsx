import React from "react";

import "./NavigationStyles.css";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

// TODO Set the position of the menu items and add context

export default function SettingsTab() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="list-item"
      >
        Settings
      </Button>
      <Menu
        id="fade-menu"
        className="settingsContent"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Background color</MenuItem>
        <MenuItem onClick={handleClose}>Font style</MenuItem>
      </Menu>
    </div>
  );
}
