import styled from "styled-components";

const StyledContainer = styled.div`
  width: 50vw;

  @media (max-width: 1700px) {
    width: 60vw;
  }

  @media (max-width: 1500px) {
    width: 70vw;
  }

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.text};
  text-align: center;
  font-size: 3em;
  letter-spacing: 10px;
  margin: 5vh 0 3vh 0;

  @media (max-width: 768px) {
    margin: 5vh 15vw 2vh 15vw;
    font-size: 2em;
  }
`;

export { StyledContainer, Title };
