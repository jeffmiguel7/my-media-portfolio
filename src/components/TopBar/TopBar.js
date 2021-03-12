import React from "react";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { InstaIcon, PhotoIcon, VideoIcon } from "../BarIcons/BarIcons";
import TopBarLogo from "../TopBarLogo/TopBarLogo";
import { NavContainer, RightSideNav, LeftSideNav } from "./TopBarStyles";

const TopBar = () => {
  return (
    <NavContainer>
      <LeftSideNav>
        <TopBarLogo />
      </LeftSideNav>
      <RightSideNav>
        <PhotoIcon size={29} />
        <VideoIcon size={29} />
        <InstaIcon
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
