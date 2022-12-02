import React, { useState, useEffect, useRef } from "react";
import useAxios from "../../hooks/useAxios";
import { WorldCupInstance } from "./worldCupIntance";
import Matches from "./matches";
import { StyledprodeContainer } from "../../styles/eliminacionDirecta";

export const DirectElimination = ({ userGroup, user, showDate, isEditing }) => {
  const [currentInstance, setCurrentInstance] = useState("Octavos de Final");

  const setCurrentInstanceHandler = (groupSelected: string) => {
    setCurrentInstance(() => groupSelected);
  };

  return (
    <>
      <StyledprodeContainer>
        <WorldCupInstance
          setCurrentInstanceHandler={setCurrentInstanceHandler}
        />
        {/* <div style={{ width: "40%" }}> */}
        <Matches
          instance={currentInstance}
          userGroup={userGroup}
          user={user}
          showDate={showDate}
          isEditing={isEditing}
        />
        {/* </div> */}
      </StyledprodeContainer>
    </>
  );
};
