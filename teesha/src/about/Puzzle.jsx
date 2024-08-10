// src/App.js
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PuzzlePiece from './PuzzlePiece';
import PuzzleBoard from './PuzzleBoard';

const initialPieces = [
    { id: 1, text: 'Projects', color: '#ffcc00' },
    { id: 2, text: 'Experience', color: '#66ccff' },
    { id: 3, text: 'Facts About Me', color: '#ff6666' },
    { id: 4, text: 'Skills', color: '#99cc33' },
    { id: 5, text: 'Hobbies', color: 'brown' },
];

function Puzzle() {
    const [pieces, setPieces] = useState(initialPieces);
    const [board, setBoard] = useState(null);

    const handleDrop = (id) => {
        const piece = pieces.find((p) => p.id === id);
        setBoard(piece);
        setPieces(pieces.filter((p) => p.id !== id));
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="container mt-5 col-lg-6">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex flex-wrap justify-content-center mb-5">
                            {pieces.map((piece) => (
                                <PuzzlePiece
                                    key={piece.id}
                                    id={piece.id}
                                    piece={piece}
                                    onDrop={handleDrop}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col-12">
                        <PuzzleBoard piece={board} />
                    </div>
                </div>
            </div>
        </DndProvider>
    );
}

export default Puzzle;
