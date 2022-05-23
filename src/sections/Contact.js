import React from 'react'
import styled from 'styled-components';
import './css/Contact.css';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin-bottom:0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.grey};
  
  position: relative;
  `;
  
  const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.textRgba};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 10px ${(props) => props.theme.bodyBlack};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 40em) {
    width:80vw;
    font-size: ${(props) => props.theme.fontxxl};
    position: absolute;
  top: -.5rem;
  left: 5%;
  z-index: 11;
  }
`;

const Left = styled.div`
  width: 35%;

  min-height: 100vh;
  z-index: 15;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
 
 
  @media (max-width: 40em) {
   width:80vw;
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

  @media (max-width: 40em) {
   display:none;
}

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Contact = () => {
  return (
      <Section id='contacts'>
          <Title data-scroll data-scroll-speed="-3" data-scroll-direction='horizontal'>Contact Us</Title>
          <Right></Right>
          <Left>
              <form className='form'>
                  <ul className='contacts'>
                      <li className='half contact'>
                          <input type="text" name="firstName" placeholder=' First Name' required />
                      </li>
                      <li className='half contact'>
                          <input type="text" name="lastName" placeholder=' Last Name' required />
                      </li>
                      <li className='contact'>
                          <input type="email" name="email" placeholder=' Email Address' required />
                      </li>
                      <li className='contact'>
                          <input type="number" name="number" placeholder=' +1(999)999-9999' required />
                      </li>
                      <li className='contact'>
                          <label for="pro-name" className='pro-names'>Project Type:</label>
                              <select className='sel-names'>
                          <option name="Website Development" id="pro-names1">Website Development</option>
                          <option name="Digital Marketing" id="pro-names2">Digital Marketing</option>
                          <option name="Cybersecurity" id="pro-names3">Cybersecurity</option>
                          <option name="App Development" id="pro-names4">App Development</option>
                          <option name="Maintanence and Support" id="pro-names5">Maintanence and Support</option>
                          <option name="Others" id="pro-names5">Others</option>
                          </select>
                      </li>

                      <textarea placeholder='Message' name='message' required>
                      </textarea>
                      <li className='contact'>
                          <input type="submit" className='btn' value="SUBMIT" />
                      </li>
                     
                      
                  </ul>
              </form>
          </Left>
    </Section>
  )
}

export default Contact