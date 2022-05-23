import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import DG from "../assets/Images/dg.jpg";
import content from "../assets/Images/content.jpg";
import cyber from "../assets/Images/cyber.webp";
import web from "../assets/Images/web.jpg";
import { motion } from "framer-motion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 10px ${(props) => props.theme.bodyBlack};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {

    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.bodyBlack};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {

    width:40%;

    p {
      font-size: ${(props) => props.theme.fontsm};
      margin-top:6rem;
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;
const Item = styled(motion.div)`
  width: 30rem;
  margin-right: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
  }

  h3 {
    font-weight: 400;
    cursor: pointer;
    text-align: center;
  }

  @media (max-width: 48em) {
    width: 15rem; 
  }
`;

const Team = ({ img, title = "", position = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%) " }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h3>{position}</h3>
    </Item>
  );
};

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          pin: true,
        },

        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: 1,
        },

        x: -pinWrapWidth,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (

    <Section ref={ref}>
      <Title data-scroll data-scroll-speed="-1.5" className="heading">
        ABOUT US
      </Title>
      <Left>
        <p>
          Addfy was born with a vision to help businesses’ add value to their
          stories. We trust in the power of your product and believe we can
          leverage any with the right strategies. Our services include
          marketing, web designing, web application, web security and anything
          that helps you expand your customer base exponentially.
          <br />
          <br />
          Being a bunch of passionate marketeers, writers and developers, we
          possess the knowledge base and dedication required to cater to all
          your marketing and web designing needs.At Addfy, our mission is to
          create a connection between your product and the customers who are the
          heart of any brand.
        </p>
      </Left>
      <Right id="about" ref={horizontalRef} className="smooth-scroll">
        <Team  img={DG} title="SHIVAM SHARMA" position="THE MARKETER" />
        <Team img={content} title="DIVYA" position="CONTENT QUEEN" />
        <Team img={cyber} title="RAKESH" position="CYBER KING" />
        <Team img={web} title="ALAN THANKACHAN" position="WEB DEVELOPER" />
      </Right>
      </Section>
  );
};

export default About;
