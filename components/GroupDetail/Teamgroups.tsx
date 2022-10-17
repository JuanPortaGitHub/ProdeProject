import React, { useState, useRef } from "react";
import { StyledMainComponent } from "../../styles/posicionesgrupo";
import { getGroups } from "../../utils/getGroups";
import { Modal } from "@mui/material";
import WordldCupGroups from "../groupfase/worldCupGroups";

export const Teamgroups = ({
  selectedPlayer,
  selectedUserGrupo,
  open,
  handleClose,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <StyledMainComponent
        style={{
          width: "90%",
        }}
      >
        <WordldCupGroups
          showDate={false}
          userGroup={selectedUserGrupo}
          user={selectedPlayer}
          isEditing={false}
        />
      </StyledMainComponent>
    </Modal>
  );
};
