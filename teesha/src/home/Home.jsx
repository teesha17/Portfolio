import React from 'react';
import NavBar from '../navbar/Navbar';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import pdf from '../resume/TeeshaKakkarResume (8).pdf';
import { AiOutlineDownload } from 'react-icons/ai';

export default function Home() {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate('/about');
    };

    return (
        <div>
            <NavBar />
            <div className="container col-xxl-12 px-sm-4 py-5">
                <div className="row flex-lg-row flex-column-reverse align-items-center g-5 py-5 justify-content-center">
                    <div className="d-flex align-items-center justify-content-center col-10 col-sm-12 col-lg-5 mt-1 mt-lg-5 mt-md-5 cont">
                        <div className="image-container">
                            <img
                                src="/teesha5.jpg"
                                className="profile-image"
                                alt="Teesha Kakkar"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <h3 className="display-5 fw-bold text-body-emphasis lh-1 mt-3 mb-3">
                            Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                        </h3>
                        <h2 className="heading-name" style={{marginBottom:"10px"}}>
                            I'M <strong className="main-name">TEESHA KAKKAR</strong>
                        </h2>
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
                            className='typewriter'
                            repeat={Infinity}
                        />
                        <br />
                        <ul className="list">
                            <li> 🌟 Passionate coder with a love for turning ideas into reality.</li>
                            <li> 💻 Full-stack developer with a knack for problem-solving.</li>
                            <li> 🔧 Always refining my skills and expanding my tech toolkit.</li>
                            <li> 🤝 Collaborating to create impactful and meaningful projects.</li>
                            <li> 📬 How to reach me teeshakakkar2004@gmail.com</li>
                        </ul>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={handleclick}>
                                Read More
                            </button>
                            <Button type="button" className="btn btn-primary btn-lg px-4 py-2 me-md-2" href={pdf}>
                                <AiOutlineDownload />
                                &nbsp;Download CV
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
