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

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const RightSideNav = styled.div`
  display: flex;
  padding-right: 20vw;
  flex-direction: row;

  @media (max-width: 1500px) {
    padding-right: 7vw;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    padding-left: 10vw;
  }
`;

const LeftSideNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-left: 20vw;

  @media (max-width: 1500px) {
    padding-left: 10vw;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    margin-top: -15px;
    padding: 0 0 15px 0;
  }
`;

export { NavContainer, RightSideNav, LeftSideNav };
