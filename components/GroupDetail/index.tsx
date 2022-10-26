import { useState } from "react";
import { StyledMainContent } from "../../styles/posicionesgrupo";
import { GroupInfoDetails } from "./GroupInfoDetails";

import { Groups } from "./Groups";
import { Teamgroups } from "./Teamgroups";

const GroupDetail = () => {
  const [selectedPlayer, setSelectedPlayer] = useState();
  const [selectedUserGrupo, setSelectedUserGrupo] = useState();
  const [open, setOpen] = useState(false);

  const selectPlayerHandler = (player) => {
    setSelectedPlayer(player);
    setOpen(!open);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
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
      {open && (
        <Teamgroups
          selectedPlayer={selectedPlayer}
          selectedUserGrupo={selectedUserGrupo}
          open={open}
          handleClose={handleModalClose}
        />
      )}
    </StyledMainContent>
  );
};

export default GroupDetail;
