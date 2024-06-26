import React, { useState, useEffect, useRef } from 'react';

const DraggableButton = ({ color }) => {
    console.log('color:', color);
    const [isDragging, setIsDragging] = useState(false);
    const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });
    const [buttonColor, setButtonColor] = useState(color);
    const buttonRef = useRef(null);

    const handleDragStart = (event) => {
        event.dataTransfer.setData('color', buttonColor);
    };

    const handleTouchStart = (event) => {
        event.preventDefault();
        setIsDragging(true);
        setTouchPosition({
            x: event.touches[0].clientX,
            y: event.touches[0].clientY,
        });
    };

    const handleTouchMove = (event) => {
        event.preventDefault();
        const touch = event.touches[0];
        setTouchPosition({
            x: touch.clientX,
            y: touch.clientY,
        });
    };

    const handleTouchEnd = (event) => {
        event.preventDefault();
        setIsDragging(false);
        const touch = event.changedTouches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (target) {
            console.log(`dhukse`);

            console.log('Touch end event target:', target);
            console.log(`Dropped color: ${buttonColor}`);
            const dropEvent = new CustomEvent('drop', { detail: { color: buttonColor } });
            target.dispatchEvent(dropEvent);
        }
    };

    useEffect(() => {
        const button = buttonRef.current;

        if (button) {
            button.addEventListener('touchstart', handleTouchStart, { passive: false });
            button.addEventListener('touchmove', handleTouchMove, { passive: false });
            button.addEventListener('touchend', handleTouchEnd, { passive: false });

            return () => {
                button.removeEventListener('touchstart', handleTouchStart);
                button.removeEventListener('touchmove', handleTouchMove);
                button.removeEventListener('touchend', handleTouchEnd);
            };
        }
    }, [buttonRef]);

    return (
        <>
            <button
                ref={buttonRef}
                draggable
                onDragStart={handleDragStart}
                style={{
                    backgroundColor: buttonColor,
                    border: '1px solid black',
                    padding: '8px 16px',
                    cursor: 'move',
                    touchAction: 'none', // Prevent default touch actions
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
                        backgroundColor: buttonColor,
                        opacity: 0.7,
                        pointerEvents: 'none', // Prevent interference with touch events
                    }}
                />
            )}
        </>
    );
};

export default DraggableButton;
