import React, { useState, useRef } from "react";
import { StyledMainComponent } from "../../styles/posicionesgrupo";
import { Modal } from "@mui/material";
import WordldCupGroups from "../groupfase/worldCupGroups";
import ClearIcon from "@mui/icons-material/Clear";
import { StyledExitIcon, StyledTopModal } from "./styled";
export const Teamgroups = ({
  selectedPlayer,
  selectedUserGrupo,
  open,
  handleClose,
}) => {
  console.log(selectedPlayer);
  return (
    <Modal open={open} onClose={handleClose}>
      <StyledMainComponent
        style={{
          width: "90%",
        }}
      >
        <StyledTopModal onClick={handleClose}>
          <StyledExitIcon>
            <ClearIcon />
          </StyledExitIcon>
        </StyledTopModal>
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
