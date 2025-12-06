import { useState, useRef, useEffect, useCallback } from 'react';

interface CollapsibleProps {
  summary: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  isPremium?: boolean;
}

export function Collapsible({ summary, children, className = '', isPremium = false }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    updateHeight();
    // Update height when window resizes
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [updateHeight, children]);

  const handleToggle = () => {
    // Recalculate height before opening
    updateHeight();
    setIsOpen(!isOpen);
  };

  return (
    <div className={`shortcut-history ${isOpen ? 'open' : ''} ${className}`}>
      <button
        className="shortcut-history-summary"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        {summary}
        <span className="shortcut-history-arrow" />
      </button>
      <div 
        className="shortcut-history-content"
        style={{
          height: isOpen ? contentHeight + 8 : 0,
        }}
      >
        <div 
          ref={contentRef}
          className={`shortcut-history-list ${isPremium ? 'premium' : ''}`}
        >
          <div className="shortcut-history-list-inner">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
