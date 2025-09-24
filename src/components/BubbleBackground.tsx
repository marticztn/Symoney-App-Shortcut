import React, { useRef, useEffect, useState } from 'react';

const generateBubbleData = (isResize = false) => {
  const themeColors = [
    '#5AAAD7',
    '#52A2CD',
    '#4B9BC3',
    '#4494BE',
    '#3E8EB9',
  ];

  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth < 1024;
  const minSize = isMobile ? 80 : (isTablet ? 100 : 130);
  const maxSize = isMobile ? 220 : (isTablet ? 300 : 420);
  
  return Array.from({ length: 35 }, (_, i) => ({
    id: i,
    size: Math.random() * (maxSize - minSize) + minSize,
    x: Math.random() * (window.innerWidth + 200) - 100,
    y: Math.random() * (window.innerHeight + 200) - 100,
    color: themeColors[Math.floor(Math.random() * themeColors.length)],
    opacity: Math.random() * 0.05 + 0.04,
    animationDelay: isResize ? Math.random() * 0.15 : Math.random() * 3,
  }));
};

const BubbleBackground: React.FC = () => {
  const [oldBubbles, setOldBubbles] = useState<ReturnType<typeof generateBubbleData>>([]);
  const [newBubbles, setNewBubbles] = useState<ReturnType<typeof generateBubbleData>>([]);
  const [showOld, setShowOld] = useState(true);
  const [showNew, setShowNew] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const resizeTimeoutRef = useRef<number | undefined>(undefined);
  const fadeOutTimeoutRef = useRef<number | undefined>(undefined);
  const cleanupTimeoutRef = useRef<number | undefined>(undefined);
  const isInitialLoadRef = useRef(true);
  
  const smoothTransition = () => {
    // 生成新气泡数据，使用短延迟确保快速出现
    const fresh = generateBubbleData(true);
    setNewBubbles(fresh);
    setShowNew(true);
    setShowOld(true); // 保持旧气泡先可见，避免瞬间空白

    if (fadeOutTimeoutRef.current) {
      clearTimeout(fadeOutTimeoutRef.current);
    }
    if (cleanupTimeoutRef.current) {
      clearTimeout(cleanupTimeoutRef.current);
    }

    // 略微延迟后再淡出旧气泡，与新气泡淡入形成交叉
    fadeOutTimeoutRef.current = window.setTimeout(() => {
      setShowOld(false);

      // 等待旧气泡淡出后再替换数据并移除新图层
      cleanupTimeoutRef.current = window.setTimeout(() => {
        setOldBubbles(fresh);
        setShowOld(true);
        setShowNew(false);
        setNewBubbles([]);
      }, 900);
    }, 120);
  };
  
  useEffect(() => {
    // 初始化气泡
    const initial = generateBubbleData();
    setOldBubbles(initial);
    
    // 5秒后标记初始加载完成（最长延迟3秒 + 动画1.5秒 + 缓冲0.5秒）
    const initialLoadTimeout = window.setTimeout(() => {
      setIsInitialLoad(false);
      isInitialLoadRef.current = false;
    }, 5000);
    
    const handleResize = () => {
      // 防抖：窗口大小变化停止400ms后再重新生成
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      
      resizeTimeoutRef.current = window.setTimeout(() => {
        // 初始动画期间，如果窗口调整，直接更新数据而不做过渡
        if (isInitialLoadRef.current) {
          const fresh = generateBubbleData(false); // 初始加载保持长延迟
          setOldBubbles(fresh);
        } else {
          smoothTransition();
        }
      }, 400);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      if (fadeOutTimeoutRef.current) {
        clearTimeout(fadeOutTimeoutRef.current);
      }
      if (cleanupTimeoutRef.current) {
        clearTimeout(cleanupTimeoutRef.current);
      }
      clearTimeout(initialLoadTimeout);
    };
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
        opacity: 1,
      }}
    >
      {/* 旧气泡层 - 始终渲染但用opacity控制 */}
      {oldBubbles.map((bubble) => (
        <div
          key={`old-${bubble.id}`}
          className="bubble"
          style={{
            position: 'absolute',
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: `radial-gradient(circle at 30% 30%, ${bubble.color}f0, ${bubble.color}aa 55%, ${bubble.color}55 100%)`,
            borderRadius: '50%',
            opacity: isInitialLoad ? 0 : (showOld ? 0.26 : 0),
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            animation: isInitialLoad ? `bubbleFadeIn 1.5s ease-out ${bubble.animationDelay + 0.2}s forwards` : 'none',
            transition: isInitialLoad ? 'none' : 'opacity 0.8s ease-out',
            animationFillMode: 'forwards',
            filter: window.innerWidth < 768 ? 'blur(6px)' : 'blur(9px)', // 移动端降低模糊强度
            boxShadow: window.innerWidth < 768 ? `0 0 ${bubble.size * 0.2}px ${bubble.color}35` : `0 0 ${bubble.size * 0.38}px ${bubble.color}45`, // 移动端减少阴影
            zIndex: 0,
          }}
        />
      ))}
      
      {/* 新气泡层 - 仅在显示时渲染，确保动画正确触发 */}
      {showNew && newBubbles.map((bubble) => (
        <div
          key={`new-${bubble.id}`}
          className="bubble"
          style={{
            position: 'absolute',
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: `radial-gradient(circle at 30% 30%, ${bubble.color}f0, ${bubble.color}aa 55%, ${bubble.color}55 100%)`,
            borderRadius: '50%',
            opacity: 0,
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            animation: `bubbleFadeIn 0.8s ease-out ${bubble.animationDelay}s forwards`,
            animationFillMode: 'forwards',
            filter: window.innerWidth < 768 ? 'blur(6px)' : 'blur(9px)', // 移动端降低模糊强度
            boxShadow: window.innerWidth < 768 ? `0 0 ${bubble.size * 0.2}px ${bubble.color}35` : `0 0 ${bubble.size * 0.38}px ${bubble.color}45`, // 移动端减少阴影
            zIndex: 1, // 新气泡在上层
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
          backdropFilter: window.innerWidth < 768 
            ? 'saturate(120%) blur(15px)' // 移动端降低模糊和饱和度
            : 'saturate(140%) blur(30px)',
          WebkitBackdropFilter: window.innerWidth < 768 
            ? 'saturate(120%) blur(15px)' 
            : 'saturate(140%) blur(30px)',
          background: 'rgba(255, 255, 255, 0.08)',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default BubbleBackground;
