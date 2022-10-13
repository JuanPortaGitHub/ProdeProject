import { useState } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "@apollo/client";
import classes from "../auth/authform.module.css";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { GET_USER_GROUPS } from "../../graphql/queries/userQueries";
import { GroupInfoDetails } from "./GroupInfoDetails";
import { StyledGroupsSection } from "../../styles/posicionesgrupo";

const GroupDetail = () => {
  const [selectedGrupo, setSelectedGrupo] = useState("");

  const { data: session } = useSession();

  const { loading, error, data } = useQuery(GET_USER_GROUPS, {
    variables: { getUserByIdId: session?.id },
  });

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedGrupo(event.target.value as string);
  };

  return (
    <>
      <StyledGroupsSection>
        {loading && <CircularProgress color="inherit" />}
        {data && (
          <>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <>
                <InputLabel>Mis grupos</InputLabel>
                <Select value={selectedGrupo} onChange={handleChange} fullWidth>
                  {data.GetUserById.Grupos.map((grupo: any) => (
                    <MenuItem key={grupo.id} value={grupo.id}>
                      {grupo.nombre}
                    </MenuItem>
                  ))}
                </Select>
              </>
            </FormControl>
          </>
        )}
        {error && <h3>{error.message}</h3>}
        <GroupInfoDetails selectedGrupo={selectedGrupo} />
      </StyledGroupsSection>
    </>
  );
};

export default GroupDetail;
