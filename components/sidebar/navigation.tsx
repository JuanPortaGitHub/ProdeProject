import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./menuItem";
import { StyledUl } from "./styled";
import { headerSections, headerSectionsLogged } from "../Header/header";
import { signOut, useSession } from "next-auth/react";
import { StyledAnchor, StyledListElement } from "../Header/StyledHeader";
import Link from "next/link";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemIds = [0, 1, 2, 3, 4];

const Navigation = () => {
  const { data: session, status } = useSession();

  return (
    <StyledUl as={motion.ul} variants={variants}>
      {/* {session &&
        headerSections.map((headerSection, index) => (
          <StyledListElement key={index}>
            <Link href={headerSection.href}>
              <StyledAnchor>{headerSection.title}</StyledAnchor>
            </Link>
          </StyledListElement>
        ))} */}
      {/* {!session && */}
      {headerSectionsLogged.map((headerSection, index) => (
        // <MenuItem key={index}>
        <StyledListElement>
          <Link href={headerSection.href}>
            <StyledAnchor style={{ color: "black" }}>
              {headerSection.title}
            </StyledAnchor>
          </Link>
        </StyledListElement>
        // </MenuItem>
      ))}
    </StyledUl>
  );
};

export default Navigation;
