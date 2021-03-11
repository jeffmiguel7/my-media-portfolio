import styled, { keyframes } from "styled-components";

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 75vw;
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

const FilterForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 0 0 10px 0;
  @media (max-width: 768px) {
    margin: 0;
    padding: 20px 0 0 0;
  }
`;

const FilterUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const FilterLi = styled.li`
  margin: 20px 10px 0 10px;
  -webkit-tap-highlight-color: transparent;
  @media (max-width: 768px) {
    padding: 0 0 35px 0;
  }
`;

const FilterInput = styled.input`
  display: none;

  &:checked ~ label {
    background: #89ccae;
    padding: 15px 25px;
    border-radius: 50px;
    box-shadow: 5px 15px 12px #9fc9b380;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0, rgb(130, 179, 153)),
      color-stop(1, rgb(159, 201, 179))
    );
  }
`;

const FilterLabel = styled.label`
  background: #e8b1ac;
  color: #fff;
  font-weight: 700;
  padding: 15px 20px;
  border-radius: 50px;
  transition: 0.3s;
  cursor: pointer;
`;

const DarkFilterInput = styled.input`
  display: none;

  &:checked ~ label {
    background: #aae3ca;
    padding: 15px 25px;
    border-radius: 50px;
    box-shadow: 5px 10px 15px #000;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0, rgb(130, 179, 153)),
      color-stop(1, rgb(159, 201, 179))
    );
  }
`;

const DarkFilterLabel = styled.label`
  background: #ffc8c2;
  color: #18191c;
  font-weight: 700;
  padding: 15px 20px;
  border-radius: 50px;
  transition: 0.3s;
  cursor: pointer;
`;

const show = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`;

const CardFigure = styled.figure`
  z-index: 1;
  min-width: 300px;
  overflow: hidden;
  margin: 0 5px;
  animation: ${show} 0.8s ease;
`;

const CardImg = styled.img`
  width: 300px;
  height: 100%;
  left: 0;
  object-fit: cover;
  border-radius: 20px;
`;

export {
  StyledContainer,
  Title,
  FilterForm,
  FilterUl,
  FilterLi,
  FilterInput,
  FilterLabel,
  DarkFilterInput,
  DarkFilterLabel,
  CardFigure,
  CardImg,
};
