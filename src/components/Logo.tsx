import { useEffect, useRef } from 'react';

export function Logo({ size = 40 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      
      // Center point
      const centerX = size / 2;
      const centerY = size / 2;
      
      // Outer hexagon
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + rotation;
        const x = centerX + (size * 0.4) * Math.cos(angle);
        const y = centerY + (size * 0.4) * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Inner triangle
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = (Math.PI * 2 / 3) * i - rotation * 2;
        const x = centerX + (size * 0.25) * Math.cos(angle);
        const y = centerY + (size * 0.25) * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = '#b742ff';
      ctx.stroke();

      // Center dot
      ctx.beginPath();
      ctx.arc(centerX, centerY, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#ff36d9';
      ctx.fill();

      rotation += 0.005;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size]);

  return (
    <canvas 
      ref={canvasRef} 
      width={size} 
      height={size}
      className="cursor-pointer"
    />
  );
}