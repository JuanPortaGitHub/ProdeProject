import React from "react";
// import { useMsal } from '@azure/msal-react'
import { Avatar, Menu, MenuItem } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { AvatarSyled } from "./StyledHeader";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

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

  const useryData = session?.user?.image ? (
    <>
      <Image src={session?.user?.image} alt="" width={100} height={100} />
    </>
  ) : (
    session?.user?.email.substring(0, 2)
  );

  return (
    <>
      <AvatarSyled id="logOut" data-testid="logOut">
        <Avatar onClick={handleClick}>{useryData}</Avatar>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component="div" data-testid="accountName">
            {session?.user?.name}
          </MenuItem>
          <ExitToAppIcon
            onClick={logOutHandler}
            className="ml-auto"
          ></ExitToAppIcon>
          Salir
        </Menu>
      </AvatarSyled>
    </>
  );
};

export default ProfileDropDown;
