import React, { useState } from "react";
import wiskydata from "./data/data_v2.json";
import "./App.css";

function App() {
  const data = wiskydata.result;

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
      <div className="navi-wrapper">
        <CategoryNav categories={data} onCategoryClick={handleCategoryClick} />
      </div>
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
  console.log(items)
  const fieldNames = ["Name", "Glass(30ml)", "Bottle", "Country"];

  return (
    <div className="menu-wrapper">
      {items.map((item, index) => (
        <div key={`fragment-${index}`}>
          <h5 className="sub-category">{item.subCategory}</h5>
          <table key={`item-${index}`} className="category-table">
            <thead className="category-name">
              <tr>
                {fieldNames.map((name) => (
                  <th key={name}>{name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item.detailItems.map((detailItems, subIndex) => (
                <tr key={`detail-${index}-${subIndex}`} className="menu-text">
                  <td>{detailItems.enName}</td>
                  <td>{detailItems.pricePerGlass}</td>
                  <td>{detailItems.pricePerBottle}</td>
                  <td>{detailItems.country}</td>
                </tr>
              ))}
            </tbody>
          </table >
        </div>
      ))}
    </div >
  );
}
export default App;
