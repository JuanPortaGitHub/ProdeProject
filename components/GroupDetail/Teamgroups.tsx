import React, { useState, useRef } from "react";
import { StyledMainComponent } from "../../styles/posicionesgrupo";
import { Modal } from "@mui/material";
import WordldCupGroups from "../groupfase/worldCupGroups";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { StyledButtonGroup, StyledExitIcon, StyledTopModal } from "./styled";
import { DirectElimination } from "../directElimination/directElimination";

import Dialog from "@mui/material/Dialog";
export const Teamgroups = ({
  selectedPlayer,
  selectedUserGrupo,
  open,
  handleClose,
}) => {
  const [showFaseGroups, setShowFaseGroups] = useState(true);

  return (
    <Modal open={open} onClose={handleClose} style={{ overflow: "scroll" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <StyledMainComponent>
          <StyledTopModal onClick={handleClose}>
            <StyledExitIcon>
              <ClearIcon />
            </StyledExitIcon>
          </StyledTopModal>
          <StyledButtonGroup
            variant="outlined"
            aria-label="outlined button group"
          >
            <Button
              style={{ color: "white" }}
              onClick={() => setShowFaseGroups(true)}
            >
              Fase de Grupo
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={() => setShowFaseGroups(false)}
            >
              Eliminacion Directa
            </Button>
          </StyledButtonGroup>
          {showFaseGroups ? (
            <WordldCupGroups
              showDate={false}
              userGroup={selectedUserGrupo}
              user={selectedPlayer}
              isEditing={false}
            />
          ) : (
            <DirectElimination
              userGroup={selectedUserGrupo}
              user={selectedPlayer}
              showDate={true}
              isEditing={false}
            />
          )}
        </StyledMainComponent>
      </div>
    </Modal>
  );
};
