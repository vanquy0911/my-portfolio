import { useEffect, useRef, useState } from 'react';

interface Block {
  id: number;
  size: number;
  x: number;
  y: number;
  z: number;
  rotateX: number;
  rotateY: number;
  delay: number;
  gradient: string;
}

const blocks: Block[] = [
  { id: 1, size: 80, x: 20, y: 15, z: 50, rotateX: 15, rotateY: -20, delay: 0, gradient: 'from-primary to-accent' },
  { id: 2, size: 60, x: 70, y: 60, z: 30, rotateX: -10, rotateY: 25, delay: 0.2, gradient: 'from-accent to-primary' },
  { id: 3, size: 100, x: 50, y: 40, z: 70, rotateX: 20, rotateY: -15, delay: 0.4, gradient: 'from-primary via-accent to-primary' },
  { id: 4, size: 45, x: 80, y: 20, z: 20, rotateX: -15, rotateY: 30, delay: 0.6, gradient: 'from-accent to-primary' },
  { id: 5, size: 70, x: 30, y: 70, z: 40, rotateX: 10, rotateY: -25, delay: 0.8, gradient: 'from-primary to-accent' },
  { id: 6, size: 55, x: 60, y: 85, z: 60, rotateX: -20, rotateY: 15, delay: 1, gradient: 'from-accent via-primary to-accent' },
];

const Hero3DBlocks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[400px] perspective-1000"
      style={{ perspective: '1000px' }}
    >
      {blocks.map((block) => {
        const parallaxX = mousePos.x * 30 * (block.z / 100);
        const parallaxY = mousePos.y * 30 * (block.z / 100);
        const tiltX = mousePos.y * 15;
        const tiltY = mousePos.x * -15;

        return (
          <div
            key={block.id}
            className={`absolute transition-all duration-300 ease-out opacity-0 ${
              isVisible ? 'opacity-100' : ''
            }`}
            style={{
              width: block.size,
              height: block.size,
              left: `${block.x}%`,
              top: `${block.y}%`,
              transform: `
                translate(-50%, -50%)
                translateX(${parallaxX}px)
                translateY(${parallaxY}px)
                translateZ(${block.z}px)
                rotateX(${block.rotateX + tiltX}deg)
                rotateY(${block.rotateY + tiltY}deg)
              `,
              transformStyle: 'preserve-3d',
              transitionDelay: `${block.delay}s`,
              animation: `float ${4 + block.id}s ease-in-out infinite`,
              animationDelay: `${block.delay}s`,
            }}
          >
            {/* Glass block */}
            <div
              className={`w-full h-full rounded-xl bg-gradient-to-br ${block.gradient} opacity-80 backdrop-blur-sm border border-white/20 shadow-2xl`}
              style={{
                boxShadow: `
                  0 25px 50px -12px hsl(var(--primary) / 0.25),
                  inset 0 1px 1px hsl(0 0% 100% / 0.2)
                `,
              }}
            >
              {/* Inner glow */}
              <div className="absolute inset-2 rounded-lg bg-white/10 backdrop-blur-md" />
              
              {/* Shine effect */}
              <div 
                className="absolute inset-0 rounded-xl opacity-50"
                style={{
                  background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.3) 0%, transparent 50%, transparent 100%)',
                }}
              />
            </div>

            {/* Floating particles */}
            <div 
              className="absolute w-2 h-2 rounded-full bg-white/60 blur-[1px] animate-bounce-soft"
              style={{
                top: '-10px',
                left: '50%',
                animationDelay: `${block.delay + 0.5}s`,
              }}
            />
          </div>
        );
      })}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        <line x1="20%" y1="15%" x2="50%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="50%" y1="40%" x2="70%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="70%" y1="60%" x2="30%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default Hero3DBlocks;
