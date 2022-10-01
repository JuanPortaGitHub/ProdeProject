import CreateGroupForm from "./CreateGroupForm";
import JoinGroupForm from "./JoinGroupForm";
import { StyledGrid } from "./syled";

const UserGroup = () => {
  return (
    <>
      <StyledGrid container>
        <CreateGroupForm />
        <JoinGroupForm />
      </StyledGrid>
    </>
  );
};

export default UserGroup;
