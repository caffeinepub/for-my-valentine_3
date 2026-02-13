import { Button } from '@/components/ui/button';
import { Upload, RotateCcw } from 'lucide-react';
import { useMemoriesImages } from '../hooks/useMemoriesImages';
import { useRef } from 'react';

interface MemoriesStepProps {
  onNext: () => void;
}

const captions = [
  '📸 The day we started talking and I lost my peace 😌',
  "📸 Can't keep my eyes off of you 👀",
  '📸 That smile… illegal honestly 💕',
];

export default function MemoriesStep({ onNext }: MemoriesStepProps) {
  const { images, updateImage, resetImage } = useMemoriesImages();
  const fileInputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleFileSelect = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      updateImage(index, file);
    }
  };

  const triggerFileInput = (index: number) => {
    fileInputRefs[index].current?.click();
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Our Cute Memories 💭</h1>
      <div className="space-y-8 mt-8">
        {images.map((memory, index) => (
          <div key={index} className="space-y-4">
            <img
              src={memory.url}
              alt={`Memory ${index + 1}`}
              className="w-full max-w-[300px] mx-auto rounded-2xl shadow-lg"
            />
            <p className="text-base sm:text-lg lg:text-xl">{captions[index]}</p>
            <div className="flex gap-3 justify-center">
              <input
                ref={fileInputRefs[index]}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect(index, e)}
                className="hidden"
              />
              <Button
                onClick={() => triggerFileInput(index)}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <Upload className="w-4 h-4" />
                Upload Image
              </Button>
              {memory.isCustom && (
                <Button
                  onClick={() => resetImage(index)}
                  variant="ghost"
                  size="sm"
                  className="gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </Button>
              )}
            </div>
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
