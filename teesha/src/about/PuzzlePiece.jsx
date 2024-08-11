import React from 'react';
import { useDrag } from 'react-dnd';

const PuzzlePiece = ({ id, piece, onDrop }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'puzzle',
        item: { id },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                onDrop(item.id);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className={`puzzle-piece ${isDragging ? 'dragging' : ''}`}
            style={{
                backgroundColor: piece.color,
                width: '100px',
                height: '50px',
                margin: '5px',
                opacity: isDragging ? 0.5 : 1,
                cursor: isDragging ? 'grabbing' : 'grab',
                color: 'black',
                touchAction: 'none', // Prevents default touch behavior
            }}
        >
            {piece.text}
        </div>
    );
};

export default PuzzlePiece;
