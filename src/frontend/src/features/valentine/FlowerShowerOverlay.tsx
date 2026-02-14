import { useEffect, useRef } from 'react';

export default function FlowerShowerOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const flowerEmojis = ['🌸', '🌺', '🌼', '🌻', '🌷', '🌹', '💐', '🏵️'];

    for (let i = 0; i < 50; i++) {
      const flower = document.createElement('div');
      flower.className = 'fixed text-3xl top-0 animate-flower-fall pointer-events-none';
      flower.style.left = `${Math.random() * 100}vw`;
      flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
      flower.style.animationDelay = `${Math.random() * 0.8}s`;
      flower.style.animationDuration = `${3 + Math.random() * 2}s`;

      container.appendChild(flower);

      setTimeout(() => {
        flower.remove();
      }, 5500);
    }
  }, []);

  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-50" />;
}
