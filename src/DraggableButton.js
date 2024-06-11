import React from 'react';

const DraggableButton = ({ color }) => {
    const handleDragStart = (event) => {
        console.log('Dragging color:', color);
        event.dataTransfer.setData('color', color);
    };
    const handleTouchStart = (event) => {
        event.target.dataset.color = color;
    };

    const handleTouchMove = (event) => {
        const touch = event.touches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (target) {
            target.classList.add('drag-over');
        }
    };

    const handleTouchEnd = (event) => {
        const touch = event.changedTouches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (target) {
            target.classList.remove('drag-over');
            const color = event.target.dataset.color;
            const dropEvent = new CustomEvent('drop', { detail: color });
            target.dispatchEvent(dropEvent);
        }
    };
    return (
        <button
            draggable
            onDragStart={handleDragStart}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
                backgroundColor: color,
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