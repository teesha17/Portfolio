import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 250px;  /* Match the height of the Image */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
`

const Addtocart = styled.button`
    background-color:rgba(0, 0, 0, 0);
    border: 1px solid #854CE6;
    color: white;
    text-align: center;
    border-radius: 50px;
    margin: 2% 0;
    padding: 10px;
    width: 50%;
    transform: translateY(20px);
    transition: all 0.5s ease-in-out;
    opacity: 0;
`

const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`

const Card = styled.div`
    width: 400px;
    height: 400px;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    position: relative;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }

    &:hover ${Overlay} {
        opacity: 1;
    }

    &:hover ${Addtocart} {
        opacity: 1;
        transform: translateY(0);
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    border: 1px solid #854CE6;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project: project })}>
            <Image src={project.image} />
            <Overlay>
                <Addtocart><a href={project.github} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}><FaGithub /> Github</a></Addtocart>
                <Addtocart><a href={project.webapp} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}><CgWebsite /> Webapp</a></Addtocart>
            </Overlay>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            {/* <Button>View Project</Button> */}
        </Card>
    )
}

export default ProjectCards;
