import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/MainVideo.mp4";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';


const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0)`};
`;
const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }

  h2 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontxxl};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;
  }
`;
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 15,
      ease: "easeInOut",
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};


const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />

      <Title variants={container} initial="hidden" animate="show">
        <div className="h-delay">
          <motion.h1
            variant={item}
            data-scroll
            data-scroll-delay="0.15"
            data-scroll-speed="5"
          >
            A
          </motion.h1>
          <motion.h1
            variant={item}
            data-scroll
            data-scroll-delay="0.12"
            data-scroll-speed="5"
          >
            D
          </motion.h1>
          <motion.h1
            variant={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="5"
          >
            D
          </motion.h1>
          <motion.h1
            variant={item}
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="5"
          >
            F
          </motion.h1>
          <motion.h1
            variant={item}
            data-scroll
            data-scroll-delay="0.03"
            data-scroll-speed="5"
          >
            Y
          </motion.h1>
        </div>
        <motion.h2 variant={item} data-scroll data-scroll-delay="0.03" data-scroll-speed="2" >
          <b>WE MIND {'   '}
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={80}
            delaySpeed={2500}
            words={['YOUR COMPANY','YOU','YOUR BUSINESS','YOUR BRAND' ]}
            /></b>
        </motion.h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
