import { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let idCounter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: idCounter++,
      };

      setTrail((prev) => [...prev.slice(-15), newPoint]);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Clean up old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(-10));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {trail.map((point, index) => {
        const opacity = (index + 1) / trail.length;
        const size = 8 + (index / trail.length) * 16;
        
        return (
          <div
            key={point.id}
            className="absolute rounded-full pointer-events-none transition-all duration-100"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: size,
              height: size,
              opacity: opacity * 0.6,
              background: `radial-gradient(circle, hsl(var(--primary) / ${opacity}) 0%, hsl(var(--accent) / ${opacity * 0.5}) 50%, transparent 100%)`,
              filter: 'blur(2px)',
              transform: `scale(${0.5 + opacity * 0.5})`,
            }}
          />
        );
      })}
      
      {/* Main cursor glow */}
      {trail.length > 0 && (
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: trail[trail.length - 1].x - 30,
            top: trail[trail.length - 1].y - 30,
            width: 60,
            height: 60,
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      )}
    </div>
  );
};

export default CursorTrail;
