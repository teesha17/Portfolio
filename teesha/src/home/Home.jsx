import React from 'react'
import "./Home.css"
import NavBar from '../navbar/Navbar';
import {TypeAnimation} from "react-type-animation"
export default function Home() {
  return (

    <div>
    <NavBar/>
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row flex-column-reverse align-items-center g-5 py-5 justify-content-center">
      <div class="d-flex align-items-center justify-content-center col-10 col-sm-12 col-lg-4 mt-1 mt-lg-5 mt-md-5">
        <img src="../../public/teesha.jpg" class=" my-5 rounded-3" alt="Bootstrap Themes" width="250" height="400" loading="lazy"/>
      </div>
      <div class="col-lg-8">
        <h3 class="display-5 fw-bold text-body-emphasis lh-1 mt-3 mb-3">Hi There ! <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span></h3>
        <h1 className="heading-name">
        I'M
        <strong className="main-name"> TEESHA KAKKAR</strong>
        </h1>

        
        <TypeAnimation
                  sequence={[
                    'WEB DEVELOPER',
                    2000,
                    'AI/ML',
                    2000,
                    'SOFTWARE DEVELOPER',
                    1000,
                  ]}
                  wrapper="span"
                  speed={20}
                  style={{ fontSize: '3rem', display: 'inline-block' }}
                  repeat={Infinity}
                />
        
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Read More</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Download Resume</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
