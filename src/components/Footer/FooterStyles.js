import styled from "styled-components";

const getHeight = () => {
  return window.innerHeight;
};

const checkVideoRoute = () => {
  const urlArr = window.location.href.split("/");
  const lastWord = urlArr[urlArr.length - 1];
  return lastWord === "videos" ? "25" : "0";
};

const FooterContainer = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 3vh;
  border: 0;
  text-decoration: none;
  font-size: 10.5pt;
  color: ${(props) => props.theme.text};
  margin-bottom: 5vh;
  margin-top: ${checkVideoRoute}vh;

  @media (max-width: 768px) {
    z-index: 1;
    margin-top: ${getHeight() * 3.6}vh;
    font-size: 8pt;
    text-align: center;
    justify-content: center;
  }
`;

const RightFooter = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 1vw;

  @media (max-width: 1500px) {
    padding-right: 4vw;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    padding-left: 10vw;
  }
`;

const MidFooter = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-left: 3vw;

  @media (max-width: 1500px) {
    padding-left: 1vw;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    margin-top: -15px;
    padding: 0 0 15px 0;
    user-select: none;
  }
`;

const FooterEmail = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;

export { FooterContainer, LeftFooter, MidFooter, RightFooter, FooterEmail };
