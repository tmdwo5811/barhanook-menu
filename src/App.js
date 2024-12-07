import React, { useState } from "react";
import wiskydata from "./data/data.json";
import "./App.css";

function App() {
  const data = wiskydata;

  const [selectedCategory, setSelectedCategory] = useState(data[0].category);
  const [items, setItems] = useState(data[0].items);

  const handleCategoryClick = (category) => {
    const selected = data.find((item) => item.category === category);
    setSelectedCategory(selected.category);
    setItems(selected.items);
  };

  return (
    <div className="App">
      <header className="App-header header-font">HANOOK's Menu</header>
      <CategoryNav categories={data} onCategoryClick={handleCategoryClick} />
      <div className="menu-container">
        <h1 className="category-text">{selectedCategory}</h1>
        <MenuItems items={items} />
      </div>
    </div>
  );
}

function CategoryNav({ categories, onCategoryClick }) {
  return (
    <ul className="category-nav">
      {categories.map((category) => (
        <li
          key={category.category}
          onClick={() => onCategoryClick(category.category)}
        >
          {category.category}
        </li>
      ))}
    </ul>
  );
}

function MenuItems({ items }) {
  const category = ["Name", "Glass", "Bottle"];
  
  return (
    <div className="menu-items">
      {/* {items.map((item) => (
        <div className="menu-item" key={item.name}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.glass}</p>
          <p>{item.bottle}</p>
        </div>
      ))} */}
      <table>
        <thead className="category-name">
          <tr>
            {category.map((name) => (
              <th key={name.name}>{name}</th>
            ))}
          </tr>
        </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.name} className="menu-text">
                <td>{item.name}</td>
                <td>{item.glass}</td>
                <td>{item.bottle}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}
export default App;
