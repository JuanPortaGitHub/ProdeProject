import React from "react";
// import { useMsal } from '@azure/msal-react'
import { Avatar, Menu, MenuItem } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { AvatarSyled } from "./StyledHeader";

const ProfileDropDown = () => {
  // const { accounts, instance } = useMsal()
  // const initials = accounts[0]?.name[0]

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AvatarSyled id="logOut" data-testid="logOut">
        <Avatar onClick={handleClick}>AV</Avatar>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {/* <MenuItem onClick={() => instance.logout()}> */}
          <MenuItem component="div" data-testid="accountName">
            Agustin
          </MenuItem>
          <ExitToAppIcon className="ml-auto">Sign Out</ExitToAppIcon>
          {/* </MenuItem> */}
        </Menu>
      </AvatarSyled>
    </>
  );
};

export default ProfileDropDown;
