import React, { useState } from "react";
// import { useMsal } from '@azure/msal-react'
import { Avatar, CircularProgress, Menu, MenuItem } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { AvatarSyled } from "./StyledHeader";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const ProfileDropDown = () => {
  const { data: session, status } = useSession();

  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOutHandler = () => {
    setLoading(true);
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
            <b>{session?.user?.name}</b>
            {loading ? (
              <CircularProgress
                style={{
                  color: "#900C3F",
                  marginLeft: "20px",
                  width: "25px",
                  height: "25px",
                }}
              />
            ) : (
              <ExitToAppIcon
                onClick={logOutHandler}
                className="ml-auto"
                style={{ marginLeft: "20px", color: "#900C3F" }}
              ></ExitToAppIcon>
            )}
          </MenuItem>
        </Menu>
      </AvatarSyled>
    </>
  );
};

export default ProfileDropDown;
