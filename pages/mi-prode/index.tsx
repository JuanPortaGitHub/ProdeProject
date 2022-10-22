import type { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
import {
  StyledGroupsContainer,
  StyledGroup,
  StyledGroupName,
  StyledTeamContainer,
  StyledGroupTeams,
  StyledTopScreen,
  StyledImage,
  StyledH4,
  StyledH1,
  StyleName,
  StyledFlag,
  StyledprodeContainer,
} from "../../styles/groupfase";
import { getGroups } from "../../utils/getGroups";
import { motion } from "framer-motion";
import GroupMatches from "../../components/groupfase/groupMatches/matches";
import { t } from "../../utils/dictionary";
import { StyledBody } from "../../components/sidebar/styled";
import { StyledContainer } from "../../styles/styled";
import Sidebar from "../../components/sidebar/sidebar";
import { GET_USER_GROUPS } from "../../graphql/queries/userQueries";
import { useSession } from "next-auth/react";
import { useQuery } from "@apollo/client";
import Header from "../../components/Header/headerMiprode";

const Miprode: NextPage = () => {
  const [currentGroup, setCurrentGroup] = useState("");
  const { data: session, status } = useSession();
  const { loading, error, data } = useQuery(GET_USER_GROUPS, {
    variables: { getUserByIdId: session?.id },
  });

  console.log(session);

  return (
    <>
      <StyledContainer>
        <StyledBody>
          <Sidebar />
        </StyledBody>
        <Header />
      </StyledContainer>
    </>
  );
};

export default Miprode;
