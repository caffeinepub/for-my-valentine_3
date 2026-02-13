import { useEffect, useRef } from 'react';

export default function FloatingHeartsBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spawnHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'fixed bottom-0 pointer-events-none animate-float-up z-0';
      heart.innerHTML = '❤️';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.fontSize = `${15 + Math.random() * 20}px`;
      heart.style.color = 'oklch(0.62 0.22 345)';

      container.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 6000);
    };

    const interval = setInterval(spawnHeart, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0" />;
}
