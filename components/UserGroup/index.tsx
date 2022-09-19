import CreateGroupForm from "./CreateGroupForm";
import JoinGroupForm from "./JoinGroupForm";

const UserGroup = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignContent: "center",
      }}
    >
      <CreateGroupForm />
      <JoinGroupForm />
    </div>
  );
};

export default UserGroup;
