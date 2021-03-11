import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 100vw;
  transition: all 0.5s;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.text};
  text-align: center;
  font-size: xxx-large;
  margin: 5vh 0 3vh 0;
`;

export { StyledContainer, Title };
