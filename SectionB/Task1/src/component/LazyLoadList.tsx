import React, { useState } from 'react';
import LazyLoadItem from './LazyLoadItem';

interface LazyLoadListProps {
  items: {
    id: number;
    name: string;
    category: string;
    price: number;
    imageUrl: string;
  }[];
}

const LazyLoadList: React.FC<LazyLoadListProps> = ({ items }) => {
  const [loadedItems, setLoadedItems] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const handleIntersection = () => {
    setIsLoading(true);
    setTimeout(() => {
      setLoadedItems((prevItems) => Math.min(prevItems + 4, items.length));
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="lazy-load-list-container">
      {items.slice(0, loadedItems).map((item, index) => (
        <LazyLoadItem key={item.id} item={item} onIntersection={index === loadedItems - 1 ? handleIntersection : undefined} />
      ))}
      {isLoading && (
        <div className="loading-indicator">
          {/* <img src="https://via.placeholder.com/150" alt="Loading..." /> */}
          <img src="https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif" alt="Loading..." />
        </div>
      )}
    </div>
  );
};

export default LazyLoadList;
