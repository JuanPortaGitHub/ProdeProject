import React, { useState, useEffect } from "react";
import StyledHeader from "./StyledHeader";
import ProfileDropDown from "./ProfileDropDown";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  StyledList,
  StyledAnchor,
  StyledListElement,
  StyledTitle,
  StyledNav,
  StyledButton,
  StyledButtons,
} from "./StyledHeader";
import Image from "next/image";
import Head from "next/head";
import style from "./header.module.css";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Sidebar from "../sidebar/sidebar";
import { StyledContainer } from "../../styles/styled";
import { StyledBody } from "../sidebar/styled";
interface Props {
  handleDrawer?: () => void;
}

export default function Header({ handleDrawer }: Props) {
  const [color, setColor] = useState(false);
  const { data: session, status } = useSession();

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  function logoutHandler() {
    signOut();
  }

  useEffect(() => {
    // window is accessible here.
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <div className={color ? style.headerSolid : style.headerTransparent}>
        <StyledNav>
          <StyledTitle>Prode Trinche</StyledTitle>
          {/* <Image src={"/giflogo.gif"} alt="my gif" height={100} width={100} /> */}
          {!session && (
            <>
              <StyledList>
                <StyledListElement>
                  <Link href="/">
                    <StyledAnchor>Una Seccion sin loguear</StyledAnchor>
                  </Link>
                </StyledListElement>
                <StyledListElement>
                  <Link href="/">
                    <StyledAnchor>Otra Seccion sin loguear</StyledAnchor>
                  </Link>
                </StyledListElement>
                <StyledListElement>
                  <Link href="/">
                    <StyledAnchor>Otra Seccion sin loguear</StyledAnchor>
                  </Link>
                </StyledListElement>
              </StyledList>
              <StyledButtons>
                <Link href="/#signUpForm">
                  <StyledAnchor>Registrarse</StyledAnchor>
                </Link>
                <Link href="/#signUpForm">
                  <StyledButton>Ingresar</StyledButton>
                </Link>
              </StyledButtons>
            </>
          )}
          {session && (
            <>
              <StyledList>
                <StyledListElement>
                  <Link href="/">
                    <StyledAnchor>Una Seccion logueado</StyledAnchor>
                  </Link>
                </StyledListElement>
                <StyledListElement>
                  <Link href="/">
                    <StyledAnchor>Otra Seccion logueado</StyledAnchor>
                  </Link>
                </StyledListElement>
                <StyledListElement>
                  <Link href="/">
                    <StyledAnchor>Otra Seccion logueado</StyledAnchor>
                  </Link>
                </StyledListElement>
              </StyledList>
              <ProfileDropDown />
            </>
          )}
        </StyledNav>
      </div>
      {/* </div> */}
    </>
  );
}
