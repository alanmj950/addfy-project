import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;
const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 40vw;
  height: 95vh;
  box-shadow: 0 0 0 4vw ${(props) => props.theme.text};
  border: 3px solid ${(props) => props.theme.bodyBlack};
  z-index: 11;

  @media (max-width:70em) {
    width:40vw;
    height:80vh;
    position: absolute;
  top: 50%;
  left: 50%;
  }

  @media (max-width:64em) {
    width:50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};
    position: absolute;
  top: 50%;
  left: 50%;
  }

  @media (max-width:48em) {
    width:60vw;
    position: absolute;
  top: 50%;
  left: 50%;
  }

  @media (max-width:30em) {
    width:80vw;
    height:60vh;
    position: absolute;
  top: 50%;
  left: 50%;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.bodyBlack};
  text-shadow: 1px 1px 10px ${(props) => props.theme.bodyBlack};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width:64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width:48em) {
    font-size: ${(props) => props.theme.fontxl};
  }

`;

const Block = styled.div`
  width: 20%;
  position: absolute;
  padding: 2rem;
  top: 30;
  left:0;
  z-index: 0;

  @media (max-width:48em) {
    display:none;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 70%;
  transform: translate(-50%, 0);
  width: 40vw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width:64em) {
    width: 30vw;
    position: absolute;
  top: 30%;
  left: 50%;
  }
  @media (max-width:48em) {
    width: 40vw;
    position: absolute;
  top: 30%;
  left: 50%;
  }
  @media (max-width:30em) {
    width: 60vw;
    position: absolute;
  top: 30%;
  left: 50%;
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  background-color: ${(props) => props.theme.body};
  z-index: 11;
  width: 95%;
  height: 30%;
  @media (max-width:48em) {
    width: 99%;
    margin: 1.5rem 0;
  }

  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    margin-bottom: 1rem;
  }

  ,
  p {
    font-weight: 500;
    font-size: ${(props) => props.theme.fontlg};
    cursor: pointer;
    text-align: center;

    
  @media (max-width:48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  }
  a {
    cursor: pointer;
    color: red;
  }
`;

const Blogs = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App",
          scrub: true,
          pin: true,
        },

        ease: "none",
      });

      t1.fromTo(
        scrollingElement,
        {
          y: '0',
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App",
            scrub: 1,
          },
        }
      );

      ScrollTrigger.refresh();
    }, 1000);

      return () => {
          t1.kill();
          ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="blogs">
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-3"
        data-scroll-direction="horizontal"
      >
        NEWS
      </Title>
      <Container ref={ScrollingRef}>
        <Item>
          <h1>What Is a Cyber Threat?</h1>
          <p>
            A cyber threat or cybersecurity threat is a malicious act intended
            to steal or damage data or disrupt the digital wellbeing and
            stability of an enterprise. Cyber threats include a wide range of
            attacks ranging from data breaches, computer viruses, denial of
            service, and numerous other attack vectors.
          </p>
          <a
            href="https://www.toolbox.com/it-security/vulnerability-management/articles/what-is-cyber-threat/#_001"
            alt="link"
          >
            Read More...
          </a>
        </Item>
        <Item>
          <h1>
            21 Top Cybersecurity Threats and How Threat Intelligence Can Help
          </h1>
          <p>
            Cybersecurity threats are growing in frequency, diversity and
            complexity. Get a quick, up-to-date review of 21 cybersecurity
            threats and how to gain the information you need to prevent data
            breaches and bolster your information security.
          </p>
          <a
            href="https://www.exabeam.com/information-security/cyber-security-threat/"
            alt="link"
          >
            Read More...
          </a>
        </Item>
        <Item>
          <h1>What is Digital Marketing?</h1>
          <p>
            From a general standpoint, marketing is the practice of identifying
            and satisfying customer needs. This is a particularly important task
            in the business context, as successful marketing efforts can drive
            inbound leads and attract a large customer case. The traditional
            marketing cycle involves an analysis of market orientation, product
            mix and business environment. Even though marketing has deep roots
            in business history and culture, digital marketing is a relatively
            new practice.
          </p>
          <a
            href="https://www.ama.org/pages/what-is-digital-marketing/"
            alt="link"
          >
            Read More...
          </a>
        </Item>
        <Item>
          <h1>
            Application Development Software Global Market To Grow At Rate Of
            28% Through 2026
          </h1>
          <p>
            Application Development Software Global Market Report 2022 - Market
            Size, Trends, And Global Forecast 2022-2026 The Business Research
            Company's Application Development Software Global Market Report 2022
            - Market Size, Trends, And Forecast 2022-2026 LONDON, GREATER
            LONDON, UK, May 20, 2022 /EINPresswire.com / -- According to
            'Application Development Software Global Market Report 2022 - Market
            Size, Trends, And Global Forecast 2022-2026' published by The
            Business Research Company, the application development software
            market size is expected to grow to $703.13 billion in 2026 at a CAGR
            of 28.19%. The increasing demand for customized apps is expected to
            propel the application development software industry growth.
          </p>
          <a
            href="https://menafn.com/1104247804/Application-Development-Software-Global-Market-To-Grow-At-Rate-Of-28-Through-2026"
            alt="link"
          >
            Read More...
          </a>
        </Item>
        <Item>
          <h1>
            Google updates its Firebase back-end-as-a-service to make app
            development faster
          </h1>
          <p>
            Frederic Lardinois May 11, 2022·3 min read At its I/O developer
            conference, Google today announced a number of updates to Firebase,
            Google's popular back-end-as-a-service platform. The focus here is
            mostly on deeper integrations with the rest of Google's developer
            tools and platforms, as well as the overall developer ecosystem, as
            well as a number of updates that will help developers better secure
            their applications.
          </p>
          <a
            href="https://menafn.com/1104247804/Application-Development-Software-Global-Market-To-Grow-At-Rate-Of-28-Through-2026"
            alt="link"
          >
            Read More...
          </a>
        </Item>
      </Container>
      <Block data-scroll data-scroll-speed="-4"></Block>
    </Section>
  );
};

export default Blogs;
