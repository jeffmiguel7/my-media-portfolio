import styled, { keyframes } from "styled-components";

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: ${(props) => {
    const count = props.imgCount;
    return (count * 6).toString();
  }}vw;
  max-height: 500vh;
  align-content: center;
  margin-top: 2vw;
  padding: 0 120px 0 120px;
  transition: opacity 0.4s ease-in-out;

  &:hover img {
    opacity: 0.4;
  }

  &:hover img:hover {
    opacity: 1;
  }

  @media (max-width: 1500px) {
    height: ${(props) => {
      const count = props.imgCount;
      return (count * 7).toString();
    }}vw;
    padding: 0 30px 0 30px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-content: inherit;
    justify-content: center;
    align-items: flex-start; /* For Safari stretching*/
    padding: 0;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
}`;

const CardImg = styled.img`
  width: 25%;
  margin: 20px;
  border-radius: 15px;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  animation: ${fadeIn} 1s;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 80%;
    &:last-child {
      padding-bottom: 40px;
    }
  }
`;

const ConstructionZone = styled.p`
  color: ${(props) => props.theme.text};
  text-align: center;
  margin-top: 150px;
  font-size: 23pt;

  @media (max-width: 768px) {
    margin-top: 50px;
    font-size: 15pt;
  }
`;

export { CardImg, CardDiv, ConstructionZone };
