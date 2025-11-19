import React, { useRef, useState } from 'react';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
}

export const ThreeDCard: React.FC<ThreeDCardProps> = ({ children, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 degrees
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsActive(true);
  const handleMouseLeave = () => {
    setIsActive(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className={`perspective-1000 ${className}`} 
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef}
        className="transition-transform duration-100 ease-out preserve-3d w-full h-full"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isActive ? 1.02 : 1})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};