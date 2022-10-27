import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./menuItem";
import {
  StyledButtonIngresar,
  StyledButtonsOnsideBar,
  StyledAnchor,
  StyledUl,
} from "./styled";
import { headerSections, headerSectionsLogged } from "../Header/header";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { StyledButton, StyledButtons } from "../Header/StyledHeader";
import UserItem from "./userItem";
import { miProdeSections } from "../Header/header";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemIds = [0, 1, 2, 3, 4];

const Navigation = ({ open, toggle }) => {
  const { data: session, status } = useSession();
  const { pathname } = useRouter();

  const miProdeSection = pathname.includes("/mi-prode/");

  console.log(pathname);

  return (
    <>
      <StyledUl
        as={motion.ul}
        variants={variants}
        style={{ display: open ? "block" : "none" }}
      >
        <UserItem />

        {session &&
          !miProdeSection &&
          headerSectionsLogged.map((headerSection, index) => (
            <MenuItem key={index} item={headerSection} toggle={toggle} />
          ))}
        {session &&
          miProdeSection &&
          miProdeSections.map((headerSection, index) => (
            <MenuItem key={index} item={headerSection} toggle={toggle} />
          ))}
        {!session && (
          <>
            {headerSections.map((headerSection, index) => (
              <MenuItem key={index} item={headerSection} toggle={toggle} />
            ))}
          </>
        )}
      </StyledUl>
    </>
  );
};

export default Navigation;
