import { useEffect, useRef } from 'react';

export default function ConfettiOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'fixed w-2.5 h-2.5 top-0 animate-confetti-fall pointer-events-none';
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.animationDelay = `${Math.random() * 0.5}s`;

      container.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 4500);
    }
  }, []);

  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-50" />;
}
