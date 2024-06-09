import React from 'react';

const DropArea = ({ color, onDrop }) => {
    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const handleDrop = (event) => {
        event.preventDefault();
        const droppedColor = event.dataTransfer.getData('color');
        console.log('Dropped color:', droppedColor);
        onDrop(droppedColor, color);
    };
    return (
        <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            style={{
                height: '100px',
                width: '100px',
                border: `5px solid ${color}`,
                margin: '10px',
            }}
        />
    );
};

export default DropArea;