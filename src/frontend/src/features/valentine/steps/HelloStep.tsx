import { Button } from '@/components/ui/button';

interface HelloStepProps {
  onNext: () => void;
}

export default function HelloStep({ onNext }: HelloStepProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Hello My Love 👀</h1>
      <div className="space-y-4">
        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
          Yes… I made a whole website for you.
          <br />
          Because WhatsApp proposal is too basic 😤
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
          Also because you deserve effort 😌✨
        </p>
      </div>
      <Button
        onClick={onNext}
        size="lg"
        className="mt-8 bg-[oklch(0.62_0.22_345)] hover:bg-[oklch(0.55_0.22_345)] text-white px-8 py-6 text-lg rounded-full transition-transform hover:scale-110"
      >
        Continue if you're curious 😌
      </Button>
    </div>
  );
}
