import React from "react";
import {
  FooterContainer,
  LeftFooter,
  MidFooter,
  RightFooter,
  FooterEmail,
} from "./FooterStyles";

const RegFooter = () => (
  <FooterContainer>
    <LeftFooter>Copyright © 2021 JN Pictures | All rights Reserved</LeftFooter>
    <MidFooter></MidFooter>
    <RightFooter>
      <FooterEmail href="mailto:jeffmiguel7@gmail.com">
        Contact: jnpictures7@gmail.com
      </FooterEmail>
    </RightFooter>
  </FooterContainer>
);

const MobileFooter = ({ numOfFiltered }) => (
  <FooterContainer numOfFiltered={numOfFiltered}>
    <MidFooter>Copyright © 2021 JN Pictures | All rights Reserved</MidFooter>
  </FooterContainer>
);

const Footer = ({ numOfFiltered }) => {
  const isMobile = () => {
    return window.innerWidth <= 800;
  };
  return isMobile() ? (
    <MobileFooter numOfFiltered={numOfFiltered} />
  ) : (
    <RegFooter />
  );
};

export default Footer;
