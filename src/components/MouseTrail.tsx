import React, { useState, useEffect } from 'react';

const MouseTrail: React.FC = () => {
    const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                pointerEvents: 'none',
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'black',
                transform: 'translate(-50%, -50%)', // Centers the circle on the cursor
                transition: 'background-color 0.3s ease', // Smooth background color transition
            }}
        />
    );
};

export default MouseTrail;
