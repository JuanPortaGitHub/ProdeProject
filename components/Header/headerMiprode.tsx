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
  StyledTextfield,
} from "./StyledHeader";
import style from "./header.module.css";
import { signOut, useSession } from "next-auth/react";
import { GET_USER_GROUPS } from "../../graphql/queries/userQueries";
import Link from "next/link";
import Sidebar from "../sidebar/sidebar";
import { MenuItem, useMediaQuery } from "@mui/material";
import { useQuery } from "@apollo/client";

interface Props {
  handleDrawer?: () => void;
}

export const miProdeSections = [
  { title: "Tabla de Posiciones", href: "/mi-prode/tabla-de-posiciones" },
  { title: "Fase de Grupos", href: "/mi-prode/fase-de-grupo" },
  { title: "Eliminacion Directa", href: "/mi-prode/eliminacion-directa" },
];

export default function Header({ handleDrawer }: Props) {
  const [color, setColor] = useState(false);
  const { data: session, status } = useSession();
  // const isDesktopMode = useMediaQuery("(min-width:600px)");
  const [selectedGrupo, setSelectedGrupo] = useState("");
  const { loading, error, data } = useQuery(GET_USER_GROUPS, {
    variables: { getUserByIdId: session?.id },
  });

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedGrupo(event.target.value as string);
  };

  const changeColor = () => {
    if (window.scrollY >= 90) {
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
          <StyledTitle>Prode Trinche</StyledTitle>

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
        </StyledNav>
      </div>
    </>
  );
}
