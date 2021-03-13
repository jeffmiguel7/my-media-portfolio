import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  `;
const ToTopLink = styled.a`
  z-index: 1;
  position: fixed;
  font-size: 20pt;
  color: ${(props) => props.theme.text};
  margin-top: 70vh;
  margin-left: 75vw;
  animation: ${fadeIn} 0.3s;
  transition: opacity 0.4s ease-in-out, transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1500px) {
    z-index: 1;
    margin-left: 76.5vw;
  }

  @media (max-width: 768px) {
    z-index: 1;
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
    border-radius: 5px;
    padding: 10px 10px 0 10px;
    margin: 50vh 0 0 75vw;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }
`;

export { ToTopLink };
