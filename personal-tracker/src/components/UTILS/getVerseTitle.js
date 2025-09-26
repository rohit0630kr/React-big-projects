// utils/verseUtils.js
export function getVerseTitle(fullVerse) {
  if (!fullVerse) return "";

  // Split by Sanskrit verse markers or newlines
  const parts = fullVerse.split(/[\n।॥]/);

  // Take the first meaningful part
  const firstPart = parts[0].trim();

  // If it's too long, cut after ~20 chars (optional)
  return firstPart.length > 20 ? firstPart.slice(0, 20) + "..." : firstPart;
}
