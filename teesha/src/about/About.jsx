import React from "react";
import NavBar from "../navbar/Navbar";
import Puzzle from "./Puzzle";
import Skills from "./Skills";
import Experience from "./Experience";
import styled from 'styled-components'

const Title = styled.div`
font-size: 50px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

function About() {
    return (
        <div>
            <NavBar />
            <div class="container py-5 text-center" >
              <Title className='mt-5 fw-bold'>About Me</Title>
                <div class="row flex-lg-row-reverse flex-column align-items-center justify-content-between">
                    <Puzzle />
                    <Skills />
                    <Experience />
                </div>
            </div>
        </div>
    );
}

export default About;