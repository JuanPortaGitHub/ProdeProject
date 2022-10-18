import { Link, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  StyledFlag,
  StyledGroup,
  StyledGroupName,
  StyledGroupsContainer,
  StyledGroupTeams,
  StyledH1,
  StyledH4,
  StyledprodeContainer,
  StyledRightborder,
  StyledRightSquare,
  StyledTeamContainer,
  StyleName,
} from "../../styles/groupfase";
import { t } from "../../utils/dictionary";
import { getGroups } from "../../utils/getGroups";
import { StyledAnchor } from "../Header/StyledHeader";
import GroupMatches from "./groupMatches/groupMatches";

const WordldCupGroups: NextPage = ({
  userGroup,
  user,
  showDate,
  isEditing,
}) => {
  const refContainer = useRef();
  const [currentGroup, setCurrentGroup] = useState("");
  const [currentPosition, setCurrentPosition] = useState(0);

  const faseGroups = getGroups();

  const handleScroll = () => {
    refContainer?.current?.scrollTo({
      top: 0,
      left: currentPosition + 100,
      behavior: "smooth",
    });
    if (currentPosition == 1100) {
      refContainer?.current?.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setCurrentPosition(() => 0);
    }
    setCurrentPosition((curr) => curr + 100);
  };

  return (
    <StyledprodeContainer>
      <div style={{ display: "flex" }}>
        <StyledGroupsContainer ref={refContainer}>
          {faseGroups.map((group, i) => (
            <Tooltip
              key={i}
              title={
                userGroup == "" ? (
                  <>
                    <p>
                      No tenes grupos, Create un grupo o unite a alguno para
                      cargar tu prode
                    </p>
                    <Link href="/#CreateGroup">
                      <div style={{ width: "20%" }}>
                        <StyledAnchor>Acá</StyledAnchor>
                      </div>
                    </Link>
                  </>
                ) : (
                  ""
                )
              }
            >
              <motion.div
                key={i}
                initial={{ opacity: 0, translateX: -50 }}
                animate={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 0, translateX: -50 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setCurrentGroup(group.groupName)}
              >
                <StyledGroup
                  as={motion.div}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <StyledGroupName>
                    <StyledH4>Grupo</StyledH4>
                    <StyledH1>{group.groupName}</StyledH1>
                  </StyledGroupName>
                  <StyledGroupTeams>
                    {group.teams.map((team) => (
                      <StyledTeamContainer>
                        <StyledFlag>
                          <Image
                            src={team.flag}
                            alt="badge"
                            width={50}
                            height={30}
                          />
                        </StyledFlag>
                        <StyleName>{t(team.name)}</StyleName>
                      </StyledTeamContainer>
                    ))}
                  </StyledGroupTeams>
                </StyledGroup>
              </motion.div>
            </Tooltip>
          ))}
        </StyledGroupsContainer>
        <StyledRightborder onClick={handleScroll}>
          {/* <StyledRightSquare></StyledRightSquare> */}
          <ArrowForwardIosIcon />
        </StyledRightborder>
      </div>
      <GroupMatches
        showDate={showDate}
        teamsGroup={currentGroup}
        userGroup={userGroup}
        user={user}
        isEditing={isEditing}
      />
    </StyledprodeContainer>
  );
};
export default WordldCupGroups;
