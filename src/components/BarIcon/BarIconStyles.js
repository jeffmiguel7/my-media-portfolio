import { css } from "styled-components";

export const iconStyle = css`
  color: ${(props) => props.theme.text};
  transition: all 0.3s ease-in-out;
  padding-right: 1vw;
  cursor: pointer;

  @media (max-width: 768px) {
    padding-right: 5vw;
  }
`;
