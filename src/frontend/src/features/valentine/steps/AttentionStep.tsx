import { Button } from '@/components/ui/button';

interface AttentionStepProps {
  onNext: () => void;
}

export default function AttentionStep({ onNext }: AttentionStepProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">🚨 Attention Please 🚨</h1>
      <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
        This is a very serious website.
        <br />
        Only for one special girl 😌❤️
      </p>
      <Button
        onClick={onNext}
        size="lg"
        className="mt-8 bg-[oklch(0.62_0.22_345)] hover:bg-[oklch(0.55_0.22_345)] text-white px-8 py-6 text-lg rounded-full transition-transform hover:scale-110"
      >
        Enter at your own risk 😏
      </Button>
    </div>
  );
}
