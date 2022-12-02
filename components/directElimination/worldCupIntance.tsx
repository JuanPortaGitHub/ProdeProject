import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useAxios from "../../hooks/useAxios";
import {
  StyledGroupsContainer,
  StyledGroup,
  StyledGroupName,
  StyledH4,
  StyledH1,
  StyledRightborder,
} from "../../styles/eliminacionDirecta";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const WorldCupInstance = ({ setCurrentInstanceHandler }) => {
  const [currentMatches, setCurrentMatches] = useState([]);
  const refContainer = useRef();
  const [currentPosition, setCurrentPosition] = useState(0);

  const { response, loading, error } = useAxios(
    "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4429&s=2022"
  );

  useEffect(() => {
    if (response !== null) {
      setCurrentMatches(
        response?.events.filter((match) => match.intRound == "16")
      );
    }
  }, [response]);

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

  const instances = [
    "Octavos de Final",
    "Cuartos de Final",
    "Semifinal",
    "Final",
    "Tercer Puesto",
  ];

  return (
    <>
      <StyledGroupsContainer>
        {instances.map((instance, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: -50 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => setCurrentInstanceHandler(instance)}
          >
            <StyledGroup
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <StyledGroupName>
                <StyledH4>{instance}</StyledH4>
              </StyledGroupName>
            </StyledGroup>
          </motion.div>
        ))}
        <StyledRightborder onClick={handleScroll}>
          <ArrowForwardIosIcon />
        </StyledRightborder>
      </StyledGroupsContainer>
    </>
  );
};
