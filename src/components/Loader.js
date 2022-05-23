import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'


const Container = styled(motion.div)`
position:absolute;
top:0;
left:0;
right:0;
bottom:0;

touch-action:none;
overflow:hidden;

width:100vw;
height:100vh;

z-index:6;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

background-color: ${props => props.theme.bodyBlack};
color:${props => props.theme.text};
svg {
    width: 10vw;
    height: auto;
    overflow: visible;
    stroke-linejoin:round;
    stroke-width:70px;

    g{
        path{
            stroke:${props => props.theme.text};
        }
    }
  }


`;


const Text = styled(motion.span)`
font-size:${props => props.theme.fontxxl};
color;${props => props.theme.text};
font-family:"Sirin Stencil";
padding-top:0.5rem;
`

const textVariants = {
       
    hidden:{
        opacity: 0,
    },
    visible:{
        opacity: 1,
        
        transition:{
            duration: 1.5,
            yoyo: Infinity,
            ease:'easeInOut'
        }
    }
}


const pathVariants = {
       
    hidden:{
        opacity: 0,
        pathLength:0,
    },
    visible:{
        opacity: 1,
        pathLength: 1,

        transition:{
            duration: 3,
            ease:'easeIn'
        }
    }
}

const Loader = () => {
  return (
      <Container
      
          initial={{
              y:0,opacity:1
          }}
          exit={{
              y: '100%', opacity: 0
          }}
          transition={{
              duration: 2,
              
         }}
      >
          <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="195.000000pt"
          height="192.000000pt"
          viewBox="0 0 195.000000 192.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,192.000000) scale(0.100000,-0.100000)"
            fill=""
          >
                      <motion.path
                          
                          variants={pathVariants}
                          initial="hidden"
                          animate="visible"



              d="M732 1578 c-17 -40 -150 -354 -296 -698 -147 -344 -268 -635 -270
-647 l-5 -23 160 0 160 0 102 92 c179 161 351 291 552 417 123 77 410 221 502
252 37 12 74 24 81 27 6 2 12 -3 12 -13 0 -10 6 -15 13 -13 6 3 36 13 65 22
28 10 52 21 52 25 0 4 -27 20 -61 36 -44 21 -62 26 -68 17 -4 -6 -40 -16 -81
-22 -41 -5 -130 -20 -197 -32 -68 -12 -124 -20 -126 -17 -2 2 -64 148 -138
324 l-134 320 -147 3 -146 3 -30 -73z m239 -694 c-86 -35 -187 -85 -243 -120
l-38 -24 19 47 c10 27 58 146 106 267 l88 218 72 -178 71 -179 -75 -31z m824
164 c25 -12 45 -25 45 -28 0 -3 -22 -13 -50 -22 -42 -14 -50 -14 -50 -2 0 8
-3 14 -7 14 -31 0 -191 -66 -331 -135 -298 -149 -550 -322 -819 -563 l-102
-92 -150 0 c-102 0 -152 4 -157 12 -5 7 -3 8 6 3 10 -6 12 -4 7 8 -3 9 1 21
11 29 16 12 16 11 2 -7 -14 -19 -14 -19 3 -6 10 8 16 20 13 27 -3 7 3 18 12
26 15 11 16 11 7 -2 -5 -9 -2 -7 7 3 10 11 16 23 13 27 -3 4 3 14 13 21 16 13
16 12 3 -6 -8 -11 7 5 34 35 86 98 200 204 286 265 46 33 92 67 102 76 31 28
227 125 331 164 164 61 394 114 621 145 44 6 84 15 89 20 13 13 8 14 61 -12z
M1386 688 c-25 -29 -72 -88 -103 -131 l-56 -78 54 -135 54 -134 163
0 c89 0 162 2 162 5 0 9 -213 509 -220 518 -4 5 -28 -16 -54 -45z"
            />
          </g>
              </svg>
              <Text variants={textVariants}
                          initial="hidden"
                          animate="visible">
                  ADDFY
              </Text>
    </Container>
  )
}

export default Loader