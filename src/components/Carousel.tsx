import React, { useEffect, useState } from 'react';

export interface CarouselCardProps {
  images: { src: string; alt?: string }[];
  width?: number | string;   // defaults to 100%
  height?: number | string;  // defaults to 160
  autoPlayMs?: number;       // defaults to 3-seconds
}

export const CarouselCard: React.FC<CarouselCardProps> = ({
  images,
  width = '100%',
  height = "100%",
  autoPlayMs = 3000,
}) => {
  const [idx, setIdx] = useState(0);

  /* autoplay */
  useEffect(() => {
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, autoPlayMs);
    return () => clearInterval(id);
  }, [images.length, autoPlayMs]);

  const go = (n: number) =>
    setIdx((i) => (i + n + images.length) % images.length);

  const wrapperStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 12,
    width,
    height,
    margin: '12px auto',
    boxShadow: '0 1px 6px rgba(0,0,0,.15)',
  };

  const sliderStyle: React.CSSProperties = {
    display: 'flex',
    width: `${images.length * 100}%`,
    transform: `translateX(-${idx * (100 / images.length)}%)`,
    transition: 'transform .45s ease',
  };

  const imgStyle: React.CSSProperties = {
    width: `${100 / images.length}%`,
    flexShrink: 0,
    objectFit: 'cover',
  };

  const btn: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    border: 'none',
    background: '#ffffffaa',
    backdropFilter: 'blur(4px)',
    width: 32,
    height: 32,
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={wrapperStyle}>
      {/* slides */}
      <div style={sliderStyle}>
        {images.map(({ src, alt }, i) => (
          <img key={i} src={src} alt={alt} style={imgStyle} />
        ))}
      </div>

      {/* arrows */}
      <button style={{ ...btn, left: 8 }} onClick={() => go(-1)}>
        ‹
      </button>
      <button style={{ ...btn, right: 8 }} onClick={() => go(1)}>
        ›
      </button>

      {/* dots */}
      <div
        style={{
          position: 'absolute',
          bottom: 6,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 6,
        }}
      >
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIdx(i)}
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: i === idx ? '#237be2' : '#fff',
              cursor: 'pointer',
              boxShadow: '0 0 1px rgba(0,0,0,.4)',
            }}
          />
        ))}
      </div>
    </div>
  );
};