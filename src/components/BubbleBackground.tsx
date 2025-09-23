import React, { useMemo, useRef } from 'react';

const generateBubbleData = () => {
  const themeColors = [
    '#5AAAD7',
    '#52A2CD',
    '#4B9BC3',
    '#4494BE',
    '#3E8EB9',
  ];

  const isMobile = window.innerWidth < 768;
  const minSize = isMobile ? 90 : 130;
  const maxSize = isMobile ? 280 : 420;
  
  return Array.from({ length: 45 }, (_, i) => ({
    id: i,
    size: Math.random() * (maxSize - minSize) + minSize,
    x: Math.random() * (window.innerWidth + 200) - 100,
    y: Math.random() * (window.innerHeight + 200) - 100,
    color: themeColors[Math.floor(Math.random() * themeColors.length)],
    opacity: Math.random() * 0.05 + 0.04,
    animationDuration: Math.random() * 40 + 60,
    animationDelay: Math.random() * 3,
  }));
};

// Global bubble data - generated once and persisted
let globalBubbles: ReturnType<typeof generateBubbleData> | null = null;

const BubbleBackground: React.FC = () => {
  const isInitialized = useRef(false);
  
  const bubbles = useMemo(() => {
    if (!globalBubbles || !isInitialized.current) {
      globalBubbles = generateBubbleData();
      isInitialized.current = true;
    }
    return globalBubbles;
  }, []);
  
  return (
    <div 
      className="bubble-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.02) 0%, rgba(118, 75, 162, 0.02) 50%, rgba(240, 147, 251, 0.02) 100%)',
        opacity: 0,
        animation: 'backgroundFadeIn 2s ease-in-out 0.3s forwards',
      }}
    >
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            position: 'absolute',
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: `radial-gradient(circle at 30% 30%, ${bubble.color}dd, ${bubble.color}99)`,
            borderRadius: '50%',
            opacity: 0,
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            animation: `
              bubbleFadeIn 1.5s ease-out ${bubble.animationDelay + 0.2}s forwards,
              bubbleFloat ${bubble.animationDuration}s infinite linear ${bubble.animationDelay + 1.5}s
            `,
            animationFillMode: 'both',
            filter: 'blur(20px)',
            willChange: 'transform, opacity',
            boxShadow: `0 0 ${bubble.size * 0.3}px ${bubble.color}30`,
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backdropFilter: 'saturate(140%) blur(45px)',
          WebkitBackdropFilter: 'saturate(140%) blur(45px)',
          background: 'rgba(255, 255, 255, 0.1)',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default BubbleBackground;
