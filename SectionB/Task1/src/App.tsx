import './App.css'
import React from 'react';
import LazyLoadList from './component/LazyLoadList';

const generateRandomData = (count: number) => {
  const categories = ['books', 'snacks', 'clothes', 'cars'];

  const getRandomCategory = () => categories[Math.floor(Math.random() * categories.length)];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `${getRandomCategory()} ${index + 1}`,
    category: getRandomCategory(),
    price: Math.floor(Math.random() * 100) + 1,
    imageUrl: `https://source.unsplash.com/random/1900x1200/?shopping, ecommerce=${index + 1}`,
  }));
};
const App: React.FC = () => {
  const initialData = generateRandomData(100);

  return (
    <div>
      <h1>All items</h1>
      <LazyLoadList items={initialData} />
    </div>
  );
};

export default App;