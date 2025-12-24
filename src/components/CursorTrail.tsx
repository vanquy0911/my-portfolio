import { useEffect, useRef, useCallback } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  opacity: number;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const trailPoints = useRef<TrailPoint[]>([]);
  const animationRef = useRef<number>();
  const isVisible = useRef(false);

  const TRAIL_LENGTH = 20;
  const LERP_FACTOR = 0.15;

  // Initialize trail points
  useEffect(() => {
    trailPoints.current = Array.from({ length: TRAIL_LENGTH }, () => ({
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      opacity: 0,
    }));
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
    isVisible.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isVisible.current = false;
  }, []);

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update trail points with lerp
    trailPoints.current.forEach((point, index) => {
      if (index === 0) {
        point.targetX = mousePos.current.x;
        point.targetY = mousePos.current.y;
      } else {
        const prevPoint = trailPoints.current[index - 1];
        point.targetX = prevPoint.x;
        point.targetY = prevPoint.y;
      }

      point.x = lerp(point.x, point.targetX, LERP_FACTOR);
      point.y = lerp(point.y, point.targetY, LERP_FACTOR);
      point.opacity = isVisible.current ? (1 - index / TRAIL_LENGTH) * 0.8 : lerp(point.opacity, 0, 0.1);
    });

    // Draw gradient trail
    if (isVisible.current || trailPoints.current.some(p => p.opacity > 0.01)) {
      for (let i = TRAIL_LENGTH - 1; i >= 0; i--) {
        const point = trailPoints.current[i];
        const size = 4 + (1 - i / TRAIL_LENGTH) * 10;
        const progress = i / TRAIL_LENGTH;

        // Create gradient colors: indigo -> cyan -> purple
        let r, g, b;
        if (progress < 0.33) {
          // Indigo (99, 102, 241) to Cyan (6, 182, 212)
          const t = progress / 0.33;
          r = Math.round(99 + (6 - 99) * t);
          g = Math.round(102 + (182 - 102) * t);
          b = Math.round(241 + (212 - 241) * t);
        } else if (progress < 0.66) {
          // Cyan (6, 182, 212) to Purple (168, 85, 247)
          const t = (progress - 0.33) / 0.33;
          r = Math.round(6 + (168 - 6) * t);
          g = Math.round(182 + (85 - 182) * t);
          b = Math.round(212 + (247 - 212) * t);
        } else {
          // Purple (168, 85, 247) to Indigo (99, 102, 241)
          const t = (progress - 0.66) / 0.34;
          r = Math.round(168 + (99 - 168) * t);
          g = Math.round(85 + (102 - 85) * t);
          b = Math.round(247 + (241 - 247) * t);
        }

        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size
        );
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${point.opacity * 0.6})`);
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${point.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Main cursor glow
      const mainPoint = trailPoints.current[0];
      const mainGradient = ctx.createRadialGradient(
        mainPoint.x, mainPoint.y, 0,
        mainPoint.x, mainPoint.y, 25
      );
      mainGradient.addColorStop(0, `rgba(99, 102, 241, ${mainPoint.opacity * 0.3})`);
      mainGradient.addColorStop(0.5, `rgba(6, 182, 212, ${mainPoint.opacity * 0.15})`);
      mainGradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

      ctx.beginPath();
      ctx.arc(mainPoint.x, mainPoint.y, 25, 0, Math.PI * 2);
      ctx.fillStyle = mainGradient;
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleMouseMove, handleMouseLeave, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[60]"
      style={{ background: 'transparent' }}
    />
  );
};

export default CursorTrail;
