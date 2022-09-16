import React from "react";
// import { useMsal } from '@azure/msal-react'
import { Avatar, Menu, MenuItem } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { AvatarSyled } from "./StyledHeader";
import { signOut, useSession } from "next-auth/react";

const ProfileDropDown = () => {
  const { data: session, status } = useSession();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOutHandler = () => {
    signOut();
  };

  const first2Letters = session?.user?.email.substring(0, 2);

  return (
    <>
      <AvatarSyled id="logOut" data-testid="logOut">
        <Avatar onClick={handleClick}>{first2Letters}</Avatar>
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
          <ExitToAppIcon onClick={logOutHandler} className="ml-auto">
            Sign Out
          </ExitToAppIcon>
          {/* </MenuItem> */}
        </Menu>
      </AvatarSyled>
    </>
  );
};

export default ProfileDropDown;
