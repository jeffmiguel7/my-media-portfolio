import styled from "styled-components";

const NavContainer = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: "100%";
  padding-top: 3vh;
  border: 0;
  text-decoration: none;
`;

const RightSideNav = styled.div`
  display: flex;
  padding-right: 20vw;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: row;
    padding-right: 7vw;
  }
`;

const LeftSideNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-left: 20vw;

  @media (max-width: 768px) {
    flex-direction: row;
    padding-left: 2vw;
  }
`;

export { NavContainer, RightSideNav, LeftSideNav };
