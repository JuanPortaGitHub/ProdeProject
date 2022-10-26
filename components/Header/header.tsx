import React, { useState, useEffect } from "react";
import ProfileDropDown from "./ProfileDropDown";
import {
  StyledList,
  StyledAnchor,
  StyledListElement,
  StyledTitle,
  StyledNav,
  StyledButton,
  StyledButtons,
} from "./StyledHeader";
import style from "./header.module.css";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Sidebar from "../sidebar/sidebar";
import { useMediaQuery } from "@mui/material";

interface Props {
  handleDrawer?: () => void;
}
export const headerSections = [
  // { title: "Una Seccion sin loguear", href: "/" },
  // { title: "Reglamento", href: "/#Rules" },
  // { title: "Otra Seccion sin loguear", href: "/" },
];

export const headerSectionsLogged = [
  { title: "Inicio", href: "/" },
  { title: "Mi prode", href: "/mi-prode/fase-de-grupo" },
  { title: "Calendario", href: "/#calendario" },
  { title: "Reglamento", href: "/#Reglas" },
];

export default function Header({ handleDrawer }: Props) {
  const [color, setColor] = useState(false);
  const { data: session, status } = useSession();
  const isDesktopMode = useMediaQuery("(min-width:600px)");

  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    // window is accessible here.
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <div className={color ? style.headerSolid : style.headerTransparent}>
        <StyledNav>
          <Link href="/">
            <a>
              <StyledTitle>Prode Trinche</StyledTitle>
            </a>
          </Link>
          {!session && (
            <>
              <StyledList>
                {headerSections.map((headerSection, index) => (
                  <StyledListElement key={index}>
                    <Link href={headerSection.href}>
                      <StyledAnchor>{headerSection.title}</StyledAnchor>
                    </Link>
                  </StyledListElement>
                ))}
              </StyledList>
              <StyledButtons>
                <Link href="/#registrarse">
                  <StyledAnchor>Registrarse</StyledAnchor>
                </Link>
                <Link href="/#entrar">
                  <StyledButton>Ingresar</StyledButton>
                </Link>
              </StyledButtons>
            </>
          )}
          {session && (
            <>
              <StyledList>
                {headerSectionsLogged.map((headerSection, index) => (
                  <StyledListElement key={index}>
                    <Link href={headerSection.href}>
                      <StyledAnchor>{headerSection.title}</StyledAnchor>
                    </Link>
                  </StyledListElement>
                ))}
              </StyledList>
              <ProfileDropDown />
            </>
          )}
        </StyledNav>
      </div>
    </>
  );
}
