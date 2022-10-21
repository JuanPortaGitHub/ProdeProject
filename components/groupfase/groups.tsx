import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {
  StyledFlag,
  StyledGroup,
  StyledGroupName,
  StyledGroupsContainer,
  StyledGroupTeams,
  StyledH1,
  StyledH4,
  StyledRightborder,
  StyledTeamContainer,
  StyleName,
} from "../../styles/groupfase";
import { getGroups } from "../../utils/getGroups";
import { StyledAnchor } from "../Header/StyledHeader";
import { t } from "../../utils/dictionary";

interface Props {
  userGroup: number;
  setCurrentGroupHandler: (groupSelected: string) => any;
}

const faseGroups = getGroups();

const Groups = ({ userGroup, setCurrentGroupHandler }: Props) => {
  const refContainer = useRef();
  const [currentPosition, setCurrentPosition] = useState(0);

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
    <div style={{ display: "flex" }}>
      <StyledGroupsContainer ref={refContainer}>
        {faseGroups.map((group, i) => (
          // <Tooltip
          //   key={i}
          //   title={
          //     userGroup == "" ? (
          //       <>
          //         <p>
          //           No tenes grupos, Create un grupo o unite a alguno para
          //           cargar tu prode
          //         </p>
          //         <Link href="/#CreateGroup">
          //           <div style={{ width: "20%" }}>
          //             <StyledAnchor>Acá</StyledAnchor>
          //           </div>
          //         </Link>
          //       </>
          //     ) : (
          //       ""
          //     )
          //   }
          // >
          <motion.div
            key={i}
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: -50 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => setCurrentGroupHandler(group.groupName)}
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
                  <StyledTeamContainer key={team.name}>
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
          // </Tooltip>
        ))}
      </StyledGroupsContainer>
      <StyledRightborder onClick={handleScroll}>
        {/* <StyledRightSquare></StyledRightSquare> */}
        <ArrowForwardIosIcon />
      </StyledRightborder>
    </div>
  );
};

export default Groups;
