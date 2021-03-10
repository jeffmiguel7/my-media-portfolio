import React from "react";
import TopBar from "./components/TopBar/TopBar";
import { ThemeStore } from "./contexts/ThemeStore";
import Theme from "./Theme";
import styled from "styled-components";
import Gallery from "./components/Gallery/Gallery";

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <ThemeStore>
        <Theme>
          <TopBar />
          <GalleryContainer>
            <Gallery />
          </GalleryContainer>
        </Theme>
      </ThemeStore>
    </>
  );
};

export default App;
