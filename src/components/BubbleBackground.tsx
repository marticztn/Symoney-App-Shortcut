import React, { useRef, useEffect, useState, useCallback } from 'react';

interface BubbleData {
  id: number;
  size: number;
  x: number;
  y: number;
  color: string;
  opacity: number;
}

const THEME_COLORS = [
  '#5AAAD7',
  '#52A2CD',
  '#4B9BC3',
  '#4494BE',
  '#3E8EB9',
];

const BubbleBackground: React.FC = () => {
  const [bubbles, setBubbles] = useState<BubbleData[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const resizeTimeoutRef = useRef<number | undefined>(undefined);
  const fadeTimeoutRef = useRef<number | undefined>(undefined);

  const getRandomPosition = useCallback((width: number, height: number) => ({
    x: Math.random() * (width + 200) - 100,
    y: Math.random() * (height + 200) - 100,
  }), []);

  const generateBubbles = useCallback((width: number, height: number, mobile: boolean): BubbleData[] => {
    const minSize = mobile ? 80 : 130;
    const maxSize = mobile ? 220 : 420;
    const count = mobile ? 18 : 25;

    return Array.from({ length: count }, (_, i) => {
      const pos = getRandomPosition(width, height);
      return {
        id: i,
        size: Math.random() * (maxSize - minSize) + minSize,
        x: pos.x,
        y: pos.y,
        color: THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)]!,
        opacity: 0,
      };
    });
  }, [getRandomPosition]);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    const initialBubbles = generateBubbles(window.innerWidth, window.innerHeight, mobile);
    setBubbles(initialBubbles);

    // 延迟淡入显示气泡
    const initTimeout = setTimeout(() => {
      setBubbles(prev => prev.map(bubble => ({
        ...bubble,
        opacity: 0.26,
      })));
    }, 100);

    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }

      // 开始过渡：先淡出现有气泡
      setBubbles(prev => prev.map(b => ({ ...b, opacity: 0 })));

      resizeTimeoutRef.current = window.setTimeout(() => {
        const newMobile = window.innerWidth < 768;
        setIsMobile(newMobile);
        
        // 生成新气泡（初始透明度为0）
        const newBubbles = generateBubbles(window.innerWidth, window.innerHeight, newMobile);
        setBubbles(newBubbles);

        // 延迟淡入新气泡
        fadeTimeoutRef.current = window.setTimeout(() => {
          setBubbles(prev => prev.map(b => ({ ...b, opacity: 0.26 })));
        }, 100);
      }, 800); // 等待淡出动画完成
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      clearTimeout(initTimeout);
    };
  }, [generateBubbles]);

  const blurAmount = isMobile ? 6 : 9;
  const backdropBlur = isMobile ? 15 : 30;
  const backdropSaturate = isMobile ? 120 : 140;

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
        background: 'linear-gradient(135deg, rgba(248, 250, 255, 1) 0%, rgba(250, 248, 255, 1) 100%)',
        contain: 'strict',
      }}
    >
      {bubbles.map((bubble) => {
        const shadowSize = isMobile ? bubble.size * 0.2 : bubble.size * 0.38;
        const shadowOpacity = isMobile ? '35' : '45';

        return (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              position: 'absolute',
              width: bubble.size,
              height: bubble.size,
              background: `radial-gradient(circle at 30% 30%, ${bubble.color}f0, ${bubble.color}aa 55%, ${bubble.color}55 100%)`,
              borderRadius: '50%',
              left: bubble.x,
              top: bubble.y,
              filter: `blur(${blurAmount}px)`,
              boxShadow: `0 0 ${shadowSize}px ${bubble.color}${shadowOpacity}`,
              opacity: bubble.opacity,
              transition: 'opacity 0.8s ease-in-out',
              willChange: 'opacity',
              contain: 'layout style paint',
            }}
          />
        );
      })}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backdropFilter: `saturate(${backdropSaturate}%) blur(${backdropBlur}px)`,
          WebkitBackdropFilter: `saturate(${backdropSaturate}%) blur(${backdropBlur}px)`,
          background: 'rgba(255, 255, 255, 0.08)',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default BubbleBackground;
