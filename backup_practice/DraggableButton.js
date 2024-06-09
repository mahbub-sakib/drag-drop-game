import React from 'react';

const DraggableButton = () => {
    const handleDragStart = (event) => {
        event.dataTransfer.setData('text/plain', 'button');
    };
    return (
        <button
            draggable
            onDragStart={handleDragStart}
            style={{
                border: '1px solid black',
                padding: '8px 16px',
                cursor: 'move',
            }}
        >
            Drag me
        </button>
    );
};

export default DraggableButton;