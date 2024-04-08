export function CircularImg({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      className="h-16 w-16 rounded-full object-cover object-center"
      src={src}
      alt={alt}
    />
  );
}
