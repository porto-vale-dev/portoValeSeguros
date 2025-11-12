
interface ImageWithFallbackProps {
  avif: string;
  webp: string;
  png: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export default function ImageWithFallback({
  avif,
  webp,
  png,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
}: ImageWithFallbackProps) {
  return (
    <picture>
      <source srcSet={avif} type="image/avif" />
      <source srcSet={webp} type="image/webp" />
      <img
        src={png}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
      />
    </picture>
  );
}
