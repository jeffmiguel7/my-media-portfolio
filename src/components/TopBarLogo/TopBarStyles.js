import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  height: 2em;
  width: 2em;

  @media (max-width: 768px) {
    height: 8vh;
    width: 8vw;

    &:focus {
      -webkit-tap-highlight-color: transparent;
    }
  }
`;

const StyledLogo = styled.img`
  height: 100%;
  width: 100%;
  opacity: 85%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    padding-left: 7vw;
  }
`;

export { StyledLink, StyledLogo };
