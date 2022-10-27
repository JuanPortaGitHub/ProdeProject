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
import { useRouter } from "next/router";

interface Props {
  handleDrawer?: () => void;
}
export const headerSections = [
  // { title: "Inicio", href: "/" },
  // { title: "Mi prode", href: "/mi-prode/fase-de-grupo" },
  { title: "Calendario", href: "/#calendario" },
  { title: "Reglamento", href: "/#Reglas" },
];

export const headerSectionsLogged = [
  { title: "Inicio", href: "/" },
  { title: "Mi prode", href: "/mi-prode/fase-de-grupo" },
  { title: "Calendario", href: "/#calendario" },
  { title: "Reglamento", href: "/#Reglas" },
];

export const miProdeSections = [
  { title: "Inicio", href: "/" },
  { title: "Tabla de Posiciones", href: "/mi-prode/tabla-de-posiciones" },
  { title: "Fase de Grupos", href: "/mi-prode/fase-de-grupo" },
  { title: "Eliminacion Directa", href: "/mi-prode/eliminacion-directa" },
];

export default function Header({ handleDrawer }: Props) {
  const [color, setColor] = useState(false);
  const { data: session, status } = useSession();
  // const isDesktopMode = useMediaQuery("(min-width:600px)");
  const { pathname } = useRouter();

  const miProdeSection = pathname.includes("/mi-prode/");

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
          {session && !miProdeSection && (
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
          {session && miProdeSection && (
            <>
              <StyledList>
                {miProdeSections.map((headerSection, index) => (
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
