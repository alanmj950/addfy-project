import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (max-width:48em) {
    width: 90vw;
  }
`;
const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width:64em) {
    justify-content: center;
  }
`;

const Feature = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  @media (max-width:70em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width:64em) {
    margin:2rem 0;
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width:48em) {
    font-size: ${(props) => props.theme.fontlg};
    margin:2rem 0;
  }

  @media (max-width:30em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  span {
    display: block;
    background-image: linear-gradient(
      to right,
      #dd3333 0%,
      #afd5eb 65%,
      #afd5eb 100%
    );
    padding: 1rem 2rem;
    box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.7);
    border-radius: 15px;
  }
  span:hover {
    background-position: right center;
    box-shadow: 10px 1px 25px 0 #dd3333;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Features = () => {
  return (
    <Section id="features">
      <Container id="up">
        <Feature>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
            Fixed &nbsp;&nbsp;Pricing &nbsp;&nbsp;Projects
          </span>
        </Feature>
        <Feature>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-8"
            data-scroll-target="#up"
          >
            Timely &nbsp;&nbsp;Commitments
          </span>
        </Feature>
        <Feature>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
            Innovative &nbsp;&nbsp; Solutions
          </span>
        </Feature>
        <Feature>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-8"
            data-scroll-target="#up"
          >
            Long &nbsp;&nbsp;Lasting &nbsp;&nbsp;Relationship
          </span>
        </Feature>
      </Container>
    </Section>
  );
};

export default Features;
