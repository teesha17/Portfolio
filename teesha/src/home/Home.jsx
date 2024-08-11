import React from 'react'
import NavBar from '../navbar/Navbar';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from "react-type-animation"
import pdf from "../resume/TeeshaKakkarResume (8).pdf";
import { AiOutlineDownload } from "react-icons/ai";
export default function Home() {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate("/about");
    }


    return (

        <div>
            <NavBar />
            <div class="container col-xxl-12 px-sm-4 py-5">
                <div class="row flex-lg-row flex-column-reverse align-items-center g-5 py-5 justify-content-center">
                    <div class="d-flex align-items-center justify-content-center col-10 col-sm-12 col-lg-4 mt-1 mt-lg-5 mt-md-5">
                        <img src="/teesha.jpg" class=" my-5 rounded-3" alt="Bootstrap Themes" width="250" height="400" loading="lazy" />
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
                            style={{ fontSize: '4rem', display: 'inline-block', fontWeight: "bold" }}
                            repeat={Infinity}
                        />

                        <p class="lead">Hello! I'm Teesha Kakkar, a passionate full-stack web developer and AI/ML enthusiast currently pursuing my BTech in Computer Science from Jaypee Institute of Information Technology, Noida. My journey in tech began with a curiosity for how things work under the hood, leading me to explore the realms of web development and artificial intelligence.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2" onClick={handleclick}>Read More</button>
                            <Button
                                type="button"
                                class="btn btn-primary btn-lg px-4 py-2 me-md-2"
                                href={pdf}
                            >
                                <AiOutlineDownload />
                                &nbsp;Download CV
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
