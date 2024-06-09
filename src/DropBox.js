import React from 'react';

const DropBox = ({ isDropped, onDrop }) => {
    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const handleDrop = (event) => {
        event.preventDefault();
        onDrop();
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            style={{
                height: '100px',
                width: '200px',
                border: '2px dashed gray',
                backgroundColor: isDropped ? 'lightgreen' : 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {isDropped ? 'Button Dropped!' : 'Drop here'}
        </div>
    );
};

export default DropBox;