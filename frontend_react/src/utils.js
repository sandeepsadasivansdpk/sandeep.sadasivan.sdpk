// Simple utility to replace Sanity's urlFor
// Since we're using local image paths now, this just returns the source as-is
export const urlFor = (source) => {
  // If source is a string, return it directly
  if (typeof source === 'string') {
    return source;
  }
  // If it's an object with a path property, return the path
  if (source && typeof source === 'object' && source.path) {
    return source.path;
  }
  return source;
};
