import { useState } from "react";
import { StyledMainContent } from "../../styles/posicionesgrupo";

import { Groups } from "./Groups";
import { Teamgroups } from "./Teamgroups";

const GroupDetail = () => {
  const [selectedPlayer, setSelectedPlayer] = useState();
  const [selectedUserGrupo, setSelectedUserGrupo] = useState();

  console.log("selectedddplayer", selectedPlayer);
  console.log("selectedUserGrupo", selectedUserGrupo);

  return (
    <StyledMainContent>
      <Groups
        setSelectedPlayer={setSelectedPlayer}
        selectedUserGrupo={selectedUserGrupo}
        setSelectedUserGrupo={setSelectedUserGrupo}
      />
      {selectedPlayer && (
        <Teamgroups
          selectedPlayer={selectedPlayer}
          selectedUserGrupo={selectedUserGrupo}
        />
      )}
    </StyledMainContent>
  );
};

export default GroupDetail;
