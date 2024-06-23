import React, { useEffect } from 'react';
import './DropArea.css';

const DropArea = ({ color, onDrop, shouldShake }) => {

    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const handleDrop = (event) => {
        event.preventDefault();
        const droppedColor = event.dataTransfer ? event.dataTransfer.getData('color') : event.detail.color;
        onDrop(droppedColor, color);
    };

    useEffect(() => {
        const dropArea = document.getElementById(color);
        dropArea.addEventListener('drop', handleDrop);
        return () => {
            dropArea.removeEventListener('drop', handleDrop);
        };
    }, [color]);

    return (
        <div
            id={color}
            className={`${shouldShake ? 'shake' : ''}`}
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