import * as React from "react";
import { motion } from "framer-motion";
import {
  StyledLi,
  StyledIconPlaceholder,
  StyledTextPlaceHolder,
  StyledButtonsOnsideBar,
  StyledButtonIngresar,
  StyledAnchor,
} from "./styled";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ProfileDropDown from "../Header/ProfileDropDown";
// import { StyledAnchor } from "../Header/StyledHeader";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const UserItem = () => {
  const { data: session, status } = useSession();

  return (
    <StyledLi as={motion.li} variants={variants}>
      {session && (
        <StyledButtonsOnsideBar>
          Hola {session.user?.name}!{/* <ProfileDropDown /> */}
        </StyledButtonsOnsideBar>
      )}
      {!session && (
        <StyledButtonsOnsideBar>
          <Link href="/#registrarse">
            <StyledAnchor>Registrarse</StyledAnchor>
          </Link>
          <Link href="/#entrar">
            <StyledButtonIngresar>Ingresar</StyledButtonIngresar>
          </Link>
        </StyledButtonsOnsideBar>
      )}
    </StyledLi>
  );
};

export default UserItem;
