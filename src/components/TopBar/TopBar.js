import React from "react";
import styled from "styled-components";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import BarIcon from "../BarIcon/BarIcon";
import TopBarLogo from "../TopBarLogo/TopBarLogo";

const NavContainer = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: "100%";
  padding-top: 3vh;
  border: 0;
  text-decoration: none;
  background-color: ${(props) => props.theme.background};
  transition: all 0.5s;
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

const TopBar = () => {
  return (
    <NavContainer>
      <LeftSideNav>
        <TopBarLogo />
      </LeftSideNav>
      <RightSideNav>
        <BarIcon
          size={29}
          onClick={() =>
            window.open(
              "https://instagram.com/jeffnguyenpictures",
              "_blank",
              "noopener noreferrer"
            )
          }
        />
        <ThemeToggler />
      </RightSideNav>
    </NavContainer>
  );
};

export default TopBar;
