import { useState } from "react";
import { StyledMainContent } from "../../styles/posicionesgrupo";
import { LiveMatch } from "../liveMatch/liveMatch";
import { GroupInfoDetails } from "./GroupInfoDetails";
import {
  StyledMainContainer,
  StyledMatch,
} from "../../styles/tabla-de-posiciones";

import { Groups } from "./Groups";
import { Teamgroups } from "./Teamgroups";

const GroupDetail = () => {
  const [selectedPlayer, setSelectedPlayer] = useState();
  const [selectedUserGrupo, setSelectedUserGrupo] = useState("");
  const [open, setOpen] = useState(false);

  const selectPlayerHandler = (player) => {
    setSelectedPlayer(player);
    setOpen(!open);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledMainContainer>
        <StyledMainContent>
          <Groups
            selectPlayerHandler={selectPlayerHandler}
            selectedUserGrupo={selectedUserGrupo}
            setSelectedUserGrupo={setSelectedUserGrupo}
          />
          {selectedUserGrupo && (
            <GroupInfoDetails
              selectedGrupo={selectedUserGrupo}
              selectPlayerHandler={selectPlayerHandler}
            />
          )}
        </StyledMainContent>
        <StyledMatch
          key={"rober"}
          // as={motion.div}
          // whileHover={{ scale: 1.1 }}
        >
          <LiveMatch
            selectedUserGrupo={selectedUserGrupo}
            selectedUserGrupo={selectedUserGrupo}
            setSelectedUserGrupo={setSelectedUserGrupo}
          />
        </StyledMatch>
      </StyledMainContainer>
      {open && (
        <Teamgroups
          selectedPlayer={selectedPlayer}
          selectedUserGrupo={selectedUserGrupo}
          open={open}
          handleClose={handleModalClose}
        />
      )}
    </>
  );
};

export default GroupDetail;
