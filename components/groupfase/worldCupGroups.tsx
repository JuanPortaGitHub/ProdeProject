import { Link, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { StyledprodeContainer } from "../../styles/groupfase";
import { t } from "../../utils/dictionary";
import { getGroups } from "../../utils/getGroups";
import { StyledAnchor } from "../Header/StyledHeader";
import Matches from "./groupMatches/matches";
import Groups from "./groups";

interface Props {
  teamsGroup: string;
  userGroup: number;
  user: string;
  showDate: boolean;
  isEditing: boolean;
}

const WordldCupGroups = ({ userGroup, user, showDate, isEditing }: Props) => {
  const [currentGroup, setCurrentGroup] = useState("A");

  const setCurrentGroupHandler = (groupSelected: string) => {
    setCurrentGroup(() => groupSelected);
  };

  return (
    <StyledprodeContainer>
      <Groups
        userGroup={userGroup}
        setCurrentGroupHandler={setCurrentGroupHandler}
      />
      <Matches
        teamsGroup={currentGroup}
        userGroup={userGroup}
        user={user}
        showDate={showDate}
        isEditing={isEditing}
      />
    </StyledprodeContainer>
  );
};
export default WordldCupGroups;
