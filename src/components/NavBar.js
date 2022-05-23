import React, { useState } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';


const NavContainer = styled(motion.div)`
width: 100vw;
z-index: 6;
position: absolute;
top: ${props => props.click ? '0' : `-${props.theme.navHeight}`};

display: flex;
justify-content: center;
align-items: center;

transition: all 0.5s linear;

@media (max-width: 40em) {
    top: ${props => props.click ? '0' : `calc(-50vh - 4rem)` };
}
`

const MenuItems = styled(motion.ul)`
position:relative;
height: ${props => props.theme.navHeight};
background-color: ${props => props.theme.text2};
color: ${props => props.theme.text};
list-style:none;

display:flex;
justify-content:space-between;
align-items:center;
font-family:"Sirin Stencil";
width:100%;
padding: 0 10rem;


@media (max-width: 40em) {
    flex-direction:column;
    height: 50vh;
    padding:2rem 0;
}
`

const MenuBtn = styled.li`
background-color: ${props => `rgba(${props.theme.textRgba2},0.7)`};
list-style-type: style none;
color:${props => props.theme.text1};
clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

position: absolute;
top:100%;
left:50%;
transform: translateX(-50%);

width:15rem;
height:2.5rem;
font-family:"Sirin Stencil";
display:flex;
align-items:center;
justify-content:center;

font-size: ${props => props.theme.fontlg};
font-weight: 600;
text-transform:uppercase;

cursor:pointer;

@media (max-width: 40em) {
    width:10rem;
    height: 2rem;
}

`
const MenuItem = styled(motion.li)`
text-transform:uppercase;
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.textRgba2};
cursor:pointer;

@media (max-width: 40em) {
    flex-direction:column;
    padding:0.5rem 0;
}
`

const NavBar = () => {
    const [click, setClick] = useState(false);
   
    const { scroll } = useLocomotiveScroll();

    const handleScroll = (id) => {
        let elem = document.querySelector(id);
        setClick(!click);
        scroll.scrollTo(elem,
        
            {
                offset: '-100',
                duration: '2000',
                easing: [0.25,0.0,0.35,1.1]
            }
        )
    }

  return (
      <NavContainer click={click}
          initial={{
              y:'-100%'
          }}
          animate={{
              y:0
          }}
          transition= {{
              duration: 5,
              delay: 2,
          }}
         
      >
          <MenuItems
              drag="y"
              dragConstraints={{
                  top: 0,
                  bottom:70,
              }}
              dragElastic={0.2}
              dragSnapToOrigin
          >
              <MenuBtn onClick={() => setClick(!click)}>MENU</MenuBtn>
              <MenuItem
              onClick={() =>handleScroll('#home') }
              whileHover={{scale:1.1,y:-5}}
              whileTap={{scale:0.9,y:0}}
              >Home</MenuItem>
              <MenuItem
              onClick={() =>handleScroll('#services') }
              whileHover={{scale:1.1,y:-5}}
              whileTap={{scale:0.9,y:0}}
              >Services</MenuItem>
              <MenuItem
              onClick={() =>handleScroll('#about') }
              whileHover={{scale:1.1,y:-5}}
              whileTap={{scale:0.9,y:0}}
              >About us</MenuItem>
              <MenuItem
              onClick={() =>handleScroll('#features') }
              whileHover={{scale:1.1,y:-5}}
              whileTap={{scale:0.9,y:0}}
              >Features</MenuItem>
              <MenuItem
              onClick={() =>handleScroll('#blogs') }
              whileHover={{scale:1.1,y:-5}}
              whileTap={{scale:0.9,y:0}}
              >News</MenuItem>
              <MenuItem
              onClick={() =>handleScroll('#contacts') }
              whileHover={{scale:1.1,y:-5}}
              whileTap={{scale:0.9,y:0}}
              >Contact</MenuItem>
          </MenuItems>
    </NavContainer>
  )
}

export default NavBar;