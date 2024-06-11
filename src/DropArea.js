import React from 'react';

const DropArea = ({ color, onDrop }) => {
    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const handleDrop = (event) => {
        event.preventDefault();
        const droppedColor = event.dataTransfer ? event.dataTransfer.getData('color') : event.detail;
        console.log('Dropped color:', droppedColor);
        onDrop(droppedColor, color);
    };

    useEffect(() => {
        const dropArea = document.getElementById(color);
        dropArea.addEventListener('drop', handleDrop);
        return () => {
            dropArea.removeEventListener('drop', handleDrop);
        };
    }, []);

    return (
        <div
            id={color}
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