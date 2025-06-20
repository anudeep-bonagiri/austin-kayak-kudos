
import React, { useState, useEffect, useCallback } from 'react';
import { paddleMessages, emojis } from '@/config/assets';

const InteractivePaddles = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [position, setPosition] = useState(20);
  const [velocity, setVelocity] = useState(0);
  const [showStreaks, setShowStreaks] = useState(false);

  // Optimized game loop with useCallback
  const gameLoop = useCallback(() => {
    setPosition(prev => {
      const newPos = Math.max(10, Math.min(90, prev + velocity));
      
      if (newPos <= 10 && prev > 10) {
        setClickCount(0);
      }
      
      return newPos;
    });
    
    setVelocity(prev => prev - 1.2);
  }, [velocity]);

  useEffect(() => {
    const interval = setInterval(gameLoop, 50);
    return () => clearInterval(interval);
  }, [gameLoop]);

  const handlePaddleClick = useCallback(() => {
    setIsJumping(true);
    setClickCount(prev => prev + 1);
    setVelocity(6);
    setShowStreaks(true);
    
    setTimeout(() => {
      setIsJumping(false);
      setShowStreaks(false);
    }, 1500);
  }, []);

  const getCurrentMessage = useCallback(() => {
    return paddleMessages[clickCount % paddleMessages.length];
  }, [clickCount]);

  return (
    <div className="fixed bottom-0 right-2 md:right-4 z-40 pointer-events-none h-screen w-20">
      {/* Motion streaks when jumping */}
      {showStreaks && (
        <div 
          className="absolute right-2 pointer-events-none"
          style={{ bottom: `${position + 10}%` }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 bg-sunshine opacity-60 animate-fade-out"
              style={{
                height: '15px',
                right: `${10 + i * 5}px`,
                top: `${i * 4}px`,
                animationDelay: `${i * 50}ms`,
                animationDuration: '1500ms'
              }}
            />
          ))}
        </div>
      )}

      {/* Speech bubble - now displays for 10 seconds */}
      {clickCount > 0 && (
        <div 
          className="absolute right-0 bg-white/95 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-lg border-2 border-sunshine mb-3 max-w-[140px] md:max-w-[200px] z-50 pointer-events-none animate-in fade-in-0 slide-in-from-right-1"
          style={{ 
            bottom: `${position + 15}%`,
            animation: 'fadeIn 0.5s ease-in-out, fadeOut 0.5s ease-in-out 9.5s forwards'
          }}
        >
          <p className="text-forest text-xs md:text-sm font-medium leading-tight">
            {getCurrentMessage()}
          </p>
          <div className="absolute bottom-0 right-3 md:right-4 w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-white/95 transform translate-y-full"></div>
        </div>
      )}
      
      {/* Interactive Paddle Emoji */}
      <div 
        onClick={handlePaddleClick}
        className={`absolute right-0 cursor-pointer transition-all duration-200 hover:scale-110 pointer-events-auto text-6xl md:text-7xl select-none ${
          isJumping ? 'animate-pulse' : ''
        }`}
        style={{ bottom: `${position}%` }}
        title={`Click me to paddle! ${emojis.paddle}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handlePaddleClick()}
      >
        {emojis.paddle}
      </div>
      
      {/* Environmental tip counter */}
      {clickCount >= 3 && (
        <div 
          className="absolute right-0 bg-coral text-white rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-xs md:text-sm font-bold animate-pulse pointer-events-none"
          style={{ bottom: `${position + 12}%`, transform: 'translateX(8px)' }}
        >
          {clickCount}
        </div>
      )}
      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default InteractivePaddles;
