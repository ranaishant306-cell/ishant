'use client';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Lanyard = dynamic(() => import('./Lanyard'), { ssr: false });

interface LanyardCardProps {
  image: string;
  alt: string;
  className?: string;
}

export default function LanyardCard({ image, alt, className = '' }: LanyardCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 340px, (min-width: 768px) 300px, 90vw"
        className={`object-cover object-top transition-opacity duration-700 ${isVisible ? 'opacity-0' : 'opacity-100'}`}
      />
      {isVisible && (
        <div className="absolute inset-0">
          <Lanyard
            position={[0, 0, 13]}
            gravity={[0, -40, 0]}
            frontImage={image}
            backImage="/logo.png"
            imageFit="contain"
          />
        </div>
      )}
    </div>
  );
}
