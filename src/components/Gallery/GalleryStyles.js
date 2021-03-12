import styled from "styled-components";

const StyledContainer = styled.div`
  width: 60vw;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.text};
  text-align: center;
  font-size: xxx-large;
  margin: 5vh 0 3vh 0;

  @media (max-width: 768px) {
    margin: 5vh 15vw 2vh 15vw;
    font-size: 25pt;
  }
`;

export { StyledContainer, Title };
