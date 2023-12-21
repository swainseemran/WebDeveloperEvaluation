import React, { useRef, useState, useEffect } from 'react';

interface LazyLoadItemProps {
  item: {
    id: number;
    name: string;
    category: string;
    price: number;
    imageUrl: string;
  };
  onIntersection: () => void;
}

const LazyLoadItem: React.FC<LazyLoadItemProps> = ({ item, onIntersection }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && onIntersection) {
          onIntersection();
        }
      },
      { threshold: 0.5 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [onIntersection]);

  return (
    <div className="lazy-load-item" ref={itemRef}>
      <div className="image-container">
        {item.imageUrl && !isImageLoaded && (
          <div className="image-placeholder" style={{ width: '100%', paddingBottom: '75%', backgroundColor: '#dddddd' }} />
        )}
        <img
          src={item.imageUrl}
          alt={item.name}
          style={{ display: isImageLoaded ? 'block' : 'none', width: '100%', height: '100%', objectFit: 'cover' }}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>Category: {item.category}</p>
        <p>Price: ${item.price}</p>
      </div>
    </div>
  );
};

export default LazyLoadItem;
