import { Button } from '@/components/ui/button';

interface LetterStepProps {
  onNext: () => void;
}

export default function LetterStep({ onNext }: LetterStepProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl">💌</h1>
      <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed whitespace-pre-line">
        Life is more fun when you're around.
        <br />
        <br />
        Even our misunderstandings feel like episodes of a cute series 😌
        <br />
        <br />
        So I was thinking…
      </p>
      <Button
        onClick={onNext}
        size="lg"
        className="mt-8 bg-[oklch(0.62_0.22_345)] hover:bg-[oklch(0.55_0.22_345)] text-white px-8 py-6 text-lg rounded-full transition-transform hover:scale-110"
      >
        Thinking what?? 👀
      </Button>
    </div>
  );
}
