import * as React from "react";
import { motion } from "framer-motion";
import {
  StyledLi,
  StyledIconPlaceholder,
  StyledTextPlaceHolder,
} from "./styled";
import Link from "next/link";
import { StyledAnchor } from "../Header/StyledHeader";

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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ item, toggle }) => {
  // const style = { border: `2px solid ${colors[i]}` };
  return (
    <StyledLi
      as={motion.li}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={item.href}>
        <StyledAnchor style={{ color: "black" }} onClick={toggle}>
          {item.title}
        </StyledAnchor>
      </Link>
    </StyledLi>
  );
};

export default MenuItem;
