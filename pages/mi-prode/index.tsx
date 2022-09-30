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
import GroupMatches from "../../components/groupfase/groupMatches/groupMatches";
import { t } from "../../utils/dictionary";
import { StyledBody } from "../../components/sidebar/styled";
import { StyledContainer } from "../../styles/styled";
import Sidebar from "../../components/sidebar/sidebar";
import { GET_USER_GROUPS } from "../../graphql/queries/userQueries";
import { prisma } from "../../lib/prisma";
import { useSession } from "next-auth/react";
import { useQuery } from "@apollo/client";
import Header from "../../components/Header/headerMiprode";

const Miprode: NextPage = () => {
  const [currentGroup, setCurrentGroup] = useState("");
  const { data: session, status } = useSession();
  const { loading, error, data } = useQuery(GET_USER_GROUPS, {
    variables: { getUserByIdId: session?.id },
  });

  // const { Grupos } = data.GetUserById;
  console.log(session);

  const faseGroups = getGroups();

  //AGUS ACA ESTA LA FUNCION: LA DATA SE PODRIA PONER CON UN MAP DEPENDE COMO SE ESTE GUARDANDO
  // const postProdes = async () => {
  //   const createManyProde = await prisma.prode_Partido_Usuario.createMany({
  //     data: [
  //       {
  //         info_PartidosId: 315151,
  //         userId: "cl86jkdjr0077ckudp9gngh90",
  //         Goles_Local: "5",
  //         Goles_Visitante: "3",
  //         Ganador: "Argentina",
  //         grupoId: 1,
  //       },
  //       {
  //         info_PartidosId: 15151,
  //         userId: "cl86jkdjr0077ckudp9gngh90",
  //         Goles_Local: "2",
  //         Goles_Visitante: "1",
  //         Ganador: "Mexico",
  //         grupoId: 1,
  //       },
  //       {
  //         info_PartidosId: 315151,
  //         userId: "cl86jkdjr0077ckudp9gngh90",
  //         Goles_Local: "7",
  //         Goles_Visitante: "2",
  //         Ganador: "Alemania",
  //         grupoId: 1,
  //       },
  //     ],
  //     skipDuplicates: true,
  //   });

  //   console.log("RESULTADO DE CREATE", createManyProde);
  // };

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
