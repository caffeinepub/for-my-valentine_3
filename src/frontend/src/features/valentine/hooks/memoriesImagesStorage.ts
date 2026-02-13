// Storage helper for persisting memory images in localStorage

const STORAGE_KEYS = {
  memory1: 'valentine_memory_image_1',
  memory2: 'valentine_memory_image_2',
  memory3: 'valentine_memory_image_3',
} as const;

export type MemoryIndex = 0 | 1 | 2;

/**
 * Save an image data URL to localStorage for a specific memory card
 */
export function saveMemoryImage(index: MemoryIndex, dataUrl: string): void {
  try {
    const key = STORAGE_KEYS[`memory${index + 1}` as keyof typeof STORAGE_KEYS];
    localStorage.setItem(key, dataUrl);
  } catch (error) {
    console.error(`Failed to save memory image ${index + 1}:`, error);
  }
}

/**
 * Load an image data URL from localStorage for a specific memory card
 * Returns null if not found or if data is corrupted
 */
export function loadMemoryImage(index: MemoryIndex): string | null {
  try {
    const key = STORAGE_KEYS[`memory${index + 1}` as keyof typeof STORAGE_KEYS];
    const stored = localStorage.getItem(key);
    
    // Validate that it's a data URL
    if (stored && stored.startsWith('data:image/')) {
      return stored;
    }
    
    return null;
  } catch (error) {
    console.error(`Failed to load memory image ${index + 1}:`, error);
    return null;
  }
}

/**
 * Clear a persisted image for a specific memory card
 */
export function clearMemoryImage(index: MemoryIndex): void {
  try {
    const key = STORAGE_KEYS[`memory${index + 1}` as keyof typeof STORAGE_KEYS];
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Failed to clear memory image ${index + 1}:`, error);
  }
}

/**
 * Clear all persisted memory images
 */
export function clearAllMemoryImages(): void {
  Object.values(STORAGE_KEYS).forEach((key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Failed to clear ${key}:`, error);
    }
  });
}
