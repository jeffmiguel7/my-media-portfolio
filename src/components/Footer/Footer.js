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

const MobileFooter = () => (
  <FooterContainer>
    <MidFooter>Copyright © 2021 JN Pictures | All rights Reserved</MidFooter>
  </FooterContainer>
);

const Footer = () => {
  const isMobile = () => {
    return window.innerWidth <= 800;
  };
  return isMobile() ? <MobileFooter /> : <RegFooter />;
};

export default Footer;
