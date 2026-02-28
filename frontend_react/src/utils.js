export const urlFor = (source) => {
  if (typeof source === "string") {
    return source;
  }
  if (source && typeof source === "object" && source.path) {
    return source.path;
  }
  return source;
};
