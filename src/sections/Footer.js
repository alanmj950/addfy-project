import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

import Logo from "../assets/Images/MainLogo.webp";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.bodyBlack};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 10vw;
    height: auto;
  }
  img{
    margin-bottom:2rem;
  }

  h3 {
    font-size: ${(props) => props.theme.fontxl};
    font-family: "Kaushan Script";

@media (max-width:48em) {
  font-size: ${(props) => props.theme.fontxl};
  margin-top:1rem;
}

  }
`;
const FooterComponent = styled(motion.footer)`
  width: 80vw;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width:48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.3);
    }

    @media (max-width:48em) {
      padding:1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Footer = () => {

    const { scroll } = useLocomotiveScroll();

    const handleScroll = (id) => {
        let elem = document.querySelector(id);

        scroll.scrollTo(elem,
        
            {
                offset: '-100',
                duration: '2000',
                easing: [0.25,0.0,0.35,1.1]
            }
        )
    }

  return (
    <Section>
      <LogoContainer>
              <img
                  data-scroll data-scroll-speed="-1"
                  src={Logo} alt="addfy" />
        <h3  data-scroll data-scroll-speed="2">ADDFY</h3>
      </LogoContainer>
          <FooterComponent
              initial={{ y: "-400px" }}
              whileInView={{ y: 0 }}
              viewport={{ once: false }}
              transition={{
                  duration: 1.5
              }}
          >
        <ul>
          <li onClick={() => handleScroll('#home')}>Home</li>
          <li onClick={() => handleScroll('#services')}>Services</li>
          <li onClick={() => handleScroll('#about')}>About Us</li>
          <li onClick={() => handleScroll('#features')}>Features</li>
          <li onClick={() => handleScroll('#blogs')}>News</li>
          <li onClick={() => handleScroll('#contacts')}>Contact</li>
        </ul>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
