import React from "react";
import styled from "styled-components";
import "./css/Services.css";
import WebDevelopment from "../assets/Images/web-development.jpg";
import CyberSecurity from "../assets/Images/cybersecurity.jpg";
import DigitalMarketing from "../assets/Images/seo.jpg";
import AppDeveloper from "../assets/Images/app-dev.jpg";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  over-flow: hidden;
  display: flex;
  margin:0 auto;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Cards = styled.div`
  width: 100%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin: 15% 10% 2%;
  display: grid;
  flex-wrap: no-wrap;


  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2,40% );
  grid-gap: 7rem;
`;

const Services = () => {
  return (
    <Section id="services">
      <Title
        data-scroll
        data-scroll-speed="-3"
        data-scroll-direction="horizontal"
      >
        Services
      </Title>
      <Cards>
        <div className="card" >
          <img src={DigitalMarketing} className="img-card" alt="Avatar" />
          <div className="container">
            <h4>
              <b>DIGITAL MARKETING</b>
            </h4>
            <p> The promotion of brands to connect with potential customers using the internet and other forms of digital communication.</p>
          </div>
        </div>
        <div className="card">
          <img src={WebDevelopment} className="img-card" alt="Avatar" />
          <div className="container">
            <h4>
              <b>WEB DEVELOPMENT</b>
            </h4>
            <p>Web development refers to the building, creating, and maintaining
              of websites. It includes aspects such as web design, web publishing, web programming, and database management.</p>
          </div>
        </div>
        
        <div className="card" >
          <img src={CyberSecurity} className="img-card" alt="Avatar" />
          <div className="container">
            <h4>
              <b>CYBERSECURITY</b>
            </h4>
            <p>The practice of being protected against the criminal or
              unauthorized use of electronic data, or the measures taken to achieve this.</p>
          </div>
        </div>
        <div className="card" >
          <img src={AppDeveloper} className="img-card" alt="Avatar" />
          <div className="container">
            <h4>
              <b>APP DEVELOPMENT</b>
            </h4>
            <p>The process to making software for smartphones and digital assistants, most commonly for Android and iOS. </p>
          </div>
        </div>
      </Cards>
    </Section>
  );
};

export default Services;
