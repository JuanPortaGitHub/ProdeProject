import styled from "styled-components";

export const StyledBody = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #0055ff 0%, rgb(0, 153, 255) 100%);
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 20;
`;

export const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
`;
export const StyledButton = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`;

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
`;

export const StyledLi = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

//   ul {
//     padding: 25px;
//     position: absolute;
//     top: 100px;
//     width: 230px;
//   }

//   li {
//     list-style: none;
//     margin-bottom: 20px;
//     display: flex;
//     align-items: center;
//     cursor: pointer;
//   }

export const StyledIconPlaceholder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
`;

export const StyledTextPlaceHolder = styled.div`
  border-radius: 5px;
  width: 200px;
  height: 20px;
  flex: 1;
`;
export const StyledRefresh = styled.div`
  padding: 10px;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
