// This hook is no longer used but kept for backwards compatibility
// All memory images are now hardcoded static assets in MemoriesStep.tsx

const DEFAULT_IMAGES = [
  '/assets/generated/memory-1-v2.dim_300x200.jpg',
  '/assets/generated/memory-2-v2.dim_300x200.jpg',
  '/assets/generated/memory-3-v2.dim_300x200.jpg',
];

interface MemoryImage {
  src: string;
  isCustom: boolean;
}

export function useMemoriesImages() {
  // Return only the default static images, no localStorage interaction
  const images: MemoryImage[] = DEFAULT_IMAGES.map((src) => ({
    src,
    isCustom: false,
  }));

  // No-op functions for backwards compatibility
  const uploadImage = async (): Promise<void> => {
    // No longer supported
  };

  const resetImage = (): void => {
    // No longer supported
  };

  return {
    images,
    uploadImage,
    resetImage,
  };
}
