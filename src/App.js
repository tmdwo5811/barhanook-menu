import React, { useState } from "react";
import wiskydata from "./data/data_v2.json";
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
      <table className="category-table">
        <thead className="category-name">
          <tr>
            {category.map((subCategory) => (
              <th key={subCategory.subCategory}>{subCategory}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.subCategory} className="menu-text">
              {item.map((detailItems) => (
                <>
                  <td>{detailItems.enName}</td>
                  <td>{detailItems.pricePerGlass}</td>
                  <td>{detailItems.pricePerBottle}</td>
                  <td>{detailItems.country}</td>
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
