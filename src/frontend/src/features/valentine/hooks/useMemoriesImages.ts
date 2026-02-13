import { useState, useEffect } from 'react';

const STORAGE_KEY = 'valentine-memories-images';
const DEFAULT_PLACEHOLDER = 'https://via.placeholder.com/300x200';

interface MemoryImage {
  url: string;
  isCustom: boolean;
}

export function useMemoriesImages() {
  const [images, setImages] = useState<MemoryImage[]>([
    { url: DEFAULT_PLACEHOLDER, isCustom: false },
    { url: DEFAULT_PLACEHOLDER, isCustom: false },
    { url: DEFAULT_PLACEHOLDER, isCustom: false },
  ]);

  // Load images from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Validate the stored data
        if (
          Array.isArray(parsed) &&
          parsed.length === 3 &&
          parsed.every(
            (item) =>
              item &&
              typeof item === 'object' &&
              typeof item.url === 'string' &&
              typeof item.isCustom === 'boolean'
          )
        ) {
          setImages(parsed);
        }
      }
    } catch (error) {
      // If storage is corrupted or unreadable, fall back to defaults
      console.warn('Failed to load stored images, using defaults:', error);
    }
  }, []);

  // Persist images to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    } catch (error) {
      console.warn('Failed to persist images:', error);
    }
  }, [images]);

  const updateImage = (index: number, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      setImages((prev) => {
        const updated = [...prev];
        updated[index] = { url: dataUrl, isCustom: true };
        return updated;
      });
    };
    reader.readAsDataURL(file);
  };

  const resetImage = (index: number) => {
    setImages((prev) => {
      const updated = [...prev];
      updated[index] = { url: DEFAULT_PLACEHOLDER, isCustom: false };
      return updated;
    });
  };

  return {
    images,
    updateImage,
    resetImage,
  };
}
