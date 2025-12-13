import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`,
      }}
    >
      {/* Central Dot */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold rounded-full transition-all duration-300 ${isPointer ? 'w-2 h-2' : 'w-3 h-3'}`} />
      
      {/* Rotating Ring */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gold rounded-full transition-all duration-300 ${isPointer ? 'w-12 h-12 border-opacity-80' : 'w-8 h-8 border-opacity-40'}`}
        style={{
          animation: 'spin 4s linear infinite',
        }}
      >
        {/* Orbital Dot on Ring */}
        <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full" />
      </div>

      {/* Outer Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold/10 rounded-full blur-xl transition-all duration-300 ${isPointer ? 'w-20 h-20' : 'w-16 h-16'}`} />
      
      <style>{`
        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CustomCursor;
