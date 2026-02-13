import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import ConfettiOverlay from '../ConfettiOverlay';

export default function FinalQuestionStep() {
  const [response, setResponse] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 'auto', left: 'auto' });
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYesClick = () => {
    setResponse('I knew it 😌❤️\nBest decision of 2026.');
    setShowConfetti(true);
  };

  const handleNoHover = () => {
    const newTop = Math.random() * 70 + 10;
    const newLeft = Math.random() * 70 + 10;
    setNoButtonPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };

  const handleNoClick = () => {
    setResponse('Are you sure? I already told my friends 😭');
  };

  return (
    <div className="space-y-8 relative">
      <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">So Shruti ❤️....</h1>
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Will You Be My Valentine? 😌</h2>

      <div className="flex flex-wrap gap-4 justify-center items-center mt-8 relative min-h-[120px]">
        <Button
          onClick={handleYesClick}
          size="lg"
          className="bg-[oklch(0.55_0.18_145)] hover:bg-[oklch(0.50_0.18_145)] text-white px-8 py-6 text-lg rounded-full transition-transform hover:scale-110"
        >
          💚 YES
        </Button>
        <Button
          ref={noButtonRef}
          onMouseEnter={handleNoHover}
          onClick={handleNoClick}
          size="lg"
          style={{
            position: noButtonPosition.top !== 'auto' ? 'absolute' : 'relative',
            top: noButtonPosition.top,
            left: noButtonPosition.left,
          }}
          className="bg-[oklch(0.577_0.245_27.325)] hover:bg-[oklch(0.52_0.245_27.325)] text-white px-8 py-6 text-lg rounded-full transition-transform hover:scale-110"
        >
          ❌ NO
        </Button>
      </div>

      {response && (
        <p className="text-xl sm:text-2xl font-bold mt-8 whitespace-pre-line leading-relaxed">
          {response}
        </p>
      )}

      {showConfetti && <ConfettiOverlay />}
    </div>
  );
}
