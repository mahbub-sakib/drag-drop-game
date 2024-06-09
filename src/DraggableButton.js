import React from 'react';

const DraggableButton = ({ color }) => {
    const handleDragStart = (event) => {
        console.log('Dragging color:', color);
        event.dataTransfer.setData('color', color);
    };
    return (
        <button
            draggable
            onDragStart={handleDragStart}
            style={{
                backgroundColor: color,
                border: '1px solid black',
                padding: '8px 16px',
                cursor: 'move',
                color: 'white',
            }}
        >
            Drag me
        </button>
    );
};

export default DraggableButton;