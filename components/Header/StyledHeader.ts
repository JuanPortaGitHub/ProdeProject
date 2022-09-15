import styled from "styled-components";

const StyledHeader = styled.header`
  /* background-color: #005bd0;
  background: rgb(2, 0, 36);*/
  /* background: linear-gradient(
    36deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 91, 208, 1) 0%,
    rgba(3, 152, 208, 1) 100%
  ); */
  background: linear-gradient(
    36deg,
    rgba(238, 237, 235, 1) 0%,
    rgba(238, 237, 235, 1) 0%,
    rgba(134, 132, 133, 1) 100%
  );
  border-top: 2px solid #a20d35;
  box-shadow: 0 0 1.8rem rgb(0 0 0 / 50%);
  /* background-color: #005bd0; */
  /* border-bottom: 1px solid #e3e3e3;   */
  height: 60px;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  align-items: center;
`;

export default StyledHeader;

export const AvatarSyled = styled.div`
  padding-right: 1vw;
`;
export const StyledSectionTitle = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-family: Rubik;
  width: 100%;
  margin-left: 270px;
  color: white;
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-left: 0;
  }
  font-weight: bold;
  text-align-last: left;
`;

export const StyledList = styled.ul`
  display: flex;
  align-self: flex-start;
  align-items: center;
  width: 80%;
  gap: 2rem;
`;

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0px;
  height: 100%;
`;

export const StyledAnchor = styled.a`
  color: white;
  &:after {
    content: "";
    display: block;
    height: 2px;
    background: linear-gradient(to right, #ff1554 0%, #900c3f 100%);
    width: 0;
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const StyledListElement = styled.li`
  text-decoration: none;
  list-style: none;
  display: flex;
  gap: 1rem;
`;

export const StyledTitle = styled.h2`
  color: white;
  display: flex;
`;
