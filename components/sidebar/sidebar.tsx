import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
import MenuToggle from "./menuToggle";
import Navigation from "./navigation";
import {
  StyledNav,
  StyledBackground,
  StyledButtonsOnsideBar,
  StyledButtonIngresar,
  StyledAnchor,
} from "./styled";
import { StyledButton, StyledButtons } from "../Header/StyledHeader";
import Link from "next/link";
import { openStdin } from "process";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  // const [isOpen, toggleOpen] = useCycle(false, true);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     event.preventDefault();
  //     if (!containerRef?.current?.contains(event.target)) {
  //       setOpen(false);
  //     }
  //   };
  //   window.addEventListener("mousedown", handleClickOutside);
  // }, [containerRef]);

  const toggleHandler = () => {
    setOpen(!open);
  };

  return (
    <StyledNav
      as={motion.nav}
      initial={false}
      animate={open ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <StyledBackground
        as={motion.div}
        className="background"
        variants={sidebar}
      />
      <Navigation />
      <MenuToggle toggle={() => toggleHandler()} />
    </StyledNav>
  );
};

export default Sidebar;
