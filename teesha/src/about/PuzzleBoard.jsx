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
        if (!piece) return 'Drag here';

        switch (piece.text) {
            case 'Projects':
                return (
                    <div>
                        <h5>My Projects</h5>
                        <ul>
                            <li>Handicart</li>
                            <li>HomeHarbour</li>
                            <li>JSCOP-6.0</li>
                            <li>Job-Fit</li>
                            <li>Review Analyzert</li>
                            <li>Emotion Predictor</li>
                            <li>Cat or Dog</li>
                            <li>Shopping List Predictor</li>
                            <li>Langchain QnA Bot</li>
                            <li>Blog Generator</li>
                        </ul>
                    </div>
                );
            case 'Experience':
                return (
                    <div>
                        <h5>My Experience</h5>
                        <ul>
                            <li>Technical Volunteer at JIIT OPTICA</li>
                            <li>Volunteer at GAME DEV HUB</li>
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
                            <li>JavaScript, Reactjs, Node.js, ExpressJs, MongoDB</li>
                            <li>Python, Machine Learning, Generative AI</li>
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
                borderRadius: '20px',
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
