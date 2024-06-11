import React from 'react';

const DraggableButton = ({ color }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });

    const handleDragStart = (event) => {
        console.log('Dragging color:', color);
        event.dataTransfer.setData('color', color);
    };
    const handleTouchStart = (event) => {
        setIsDragging(true);
        setTouchPosition({
            x: event.touches[0].clientX,
            y: event.touches[0].clientY,
        });
        event.target.dataset.color = color;
    };

    const handleTouchMove = (event) => {
        const touch = event.touches[0];
        // const target = document.elementFromPoint(touch.clientX, touch.clientY);
        // if (target) {
        //     target.classList.add('drag-over');
        // }
        setTouchPosition({
            x: touch.clientX,
            y: touch.clientY,
        });
    };

    const handleTouchEnd = (event) => {
        setIsDragging(false);
        const touch = event.changedTouches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (target) {
            // target.classList.remove('drag-over');
            const color = event.target.dataset.color;
            const dropEvent = new CustomEvent('drop', { detail: color });
            target.dispatchEvent(dropEvent);
        }
    };
    return (
        <>
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

            {isDragging && (
                <div
                    style={{
                        position: 'fixed',
                        top: touchPosition.y - 25, // Center the ghost element
                        left: touchPosition.x - 50, // Center the ghost element
                        width: '100px',
                        height: '50px',
                        backgroundColor: color,
                        opacity: 0.7,
                        pointerEvents: 'none', // Prevent interference with touch events
                    }}
                />
            )}
        </>

    );
};

export default DraggableButton;