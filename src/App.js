import React, { useState, useEffect } from 'react';
import wiskydata from './data/menuData.json';
import './App.css';

function App() {
  const data = wiskydata;

  const [selectedCategory, setSelectedCategory] = useState(data[0].category);
  const [items, setItems] = useState(data[0].items);

  const handleCategoryClick = (category) => {
    const selected = data.find(item => item.category === category);
    setSelectedCategory(selected.category);
    setItems(selected.items);
  };

  return (
    <div className="App">
      <header className="App-header header-font">
        HANOOK's Menu
      </header>
      <CategoryNav categories={data} onCategoryClick={handleCategoryClick} />
      <div className='menu-container'>
        <MenuItems items={items} />
      </div>
    </div>
  );
}

function CategoryNav({ categories, onCategoryClick }) {
  return (
    <div className="category-nav">
      <ul>
      {categories.map(category => (
        <li key={category.category} onClick={() => onCategoryClick(category.category)}>
        {category.category}</li>
      ))}
      </ul>
    </div>
  );
}

function MenuItems({ items }) {
  return (
    <div className="menu-items">
      {items.map(item => (
        <div className="menu-item" key={item.name}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p>{item.description_en}</p>
        </div>
      ))}
    </div>
  );
}
export default App;