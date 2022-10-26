import { useRouter } from "next/router";
import { WavesTransition } from "../../styles/styled";
import {
  JoinGroupContainer,
  StyleSectionTitle,
  StyledSubTitle,
  StyledContainer,
} from "../../styles/joinGroup";
import { useSession } from "next-auth/react";
import RegisterLogin from "../../components/registerLogin/registerLogin";
import JoinGroupFormWithLink from "../../components/UserGroup/JoinGroupWithLink";

const JoinGroup = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { groupName } = router.query;

  const decodedGroupName = groupName ? groupName[0].replaceAll("-", " ") : null;

  return (
    <div style={{ color: "white" }}>
      {/* <WavesTransition> */}
      <JoinGroupContainer>
        <StyleSectionTitle>Bienvenido a {decodedGroupName}</StyleSectionTitle>

        {!session && (
          <StyledContainer>
            <StyledSubTitle>
              Primero registrate para sumar al grupo
            </StyledSubTitle>
            <RegisterLogin />
          </StyledContainer>
        )}
        {session && (
          <StyledContainer>
            <StyledSubTitle>
              Ingresa la contraseña y anda a ganarte unos morlacos
            </StyledSubTitle>
            <JoinGroupFormWithLink groupName={groupName} userId={session?.id} />
          </StyledContainer>
        )}
      </JoinGroupContainer>
      {/* </WavesTransition>   */}
    </div>
  );
};

export default JoinGroup;
