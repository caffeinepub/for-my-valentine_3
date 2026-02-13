import { Button } from '@/components/ui/button';

interface MemoriesStepProps {
  onNext: () => void;
}

const captions = [
  '📸 The day we started talking and I lost my peace 😌',
  "📸 Can't keep my eyes off of you 👀",
  '📸 That smile… illegal honestly 💕',
];

const PERMANENT_IMAGES = [
  '/assets/generated/memory-1-v2.dim_300x200.jpg',
  '/assets/generated/memory-2-v2.dim_300x200.jpg',
  '/assets/generated/memory-3-v2.dim_300x200.jpg',
];

export default function MemoriesStep({ onNext }: MemoriesStepProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Our Cute Memories 💭</h1>
      <div className="space-y-8 mt-8">
        {PERMANENT_IMAGES.map((imageSrc, index) => (
          <div key={index} className="space-y-4">
            <div className="relative w-full max-w-[300px] mx-auto">
              <img
                src={imageSrc}
                alt={`Memory ${index + 1}`}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <p className="text-base sm:text-lg lg:text-xl">{captions[index]}</p>
          </div>
        ))}
      </div>
      <Button
        onClick={onNext}
        size="lg"
        className="mt-8 bg-[oklch(0.62_0.22_345)] hover:bg-[oklch(0.55_0.22_345)] text-white px-8 py-6 text-lg rounded-full transition-transform hover:scale-110"
      >
        Continue ❤️
      </Button>
    </div>
  );
}
