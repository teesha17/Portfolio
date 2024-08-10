// src/components/PuzzleBoard.js
import React from 'react';
import { useDrop } from 'react-dnd';

const PuzzleBoard = ({ piece }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'puzzle',
        drop: () => ({ name: 'PuzzleBoard' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    const renderContent = () => {
        if (!piece) return 'Drop here';

        switch (piece.text) {
            case 'Projects':
                return (
                    <div>
                        <h5>My Projects</h5>
                        <ul>
                            <li>Project 1: AI-Based Web App</li>
                            <li>Project 2: E-Commerce Platform</li>
                            <li>Project 3: Machine Learning Model</li>
                        </ul>
                    </div>
                );
            case 'Experience':
                return (
                    <div>
                        <h5>My Experience</h5>
                        <ul>
                            <li>Internship at XYZ Company</li>
                            <li>Freelance Web Developer</li>
                            <li>Teaching Assistant at JIIT</li>
                        </ul>
                    </div>
                );
            case 'Facts About Me':
                return (
                    <div>
                        <h5>Facts About Me</h5>
                        <ul>
                            <li>I love coding challenges.</li>
                            <li>I'm a quick learner.</li>
                            <li>Big fan of open-source.</li>
                        </ul>
                    </div>
                );
            case 'Skills':
                return (
                    <div>
                        <h5>My Skills</h5>
                        <ul>
                            <li>JavaScript, React, Node.js</li>
                            <li>Python, Machine Learning</li>
                            <li>HTML, CSS, Bootstrap</li>
                        </ul>
                    </div>
                );
                case 'Hobbies':
                return (
                    <div>
                        <h5>My Hobbies</h5>
                        <ul>
                            <li>Watching Movies</li>
                            <li>Reading Books</li>
                            <li>Cycling</li>
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div
            ref={drop}
            className={`puzzle-board ${isOver ? 'hovering' : ''}`}
            style={{
                backgroundColor: isOver ? 'black' : 'black',
                border: '1px solid #854CE6',
                borderRadius:'20px',
                minHeight: '200px',
                textAlign: 'center',
                padding: '20px',
            }}
        >
            {renderContent()}
        </div>
    );
};

export default PuzzleBoard;
