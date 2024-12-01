import React from 'react';
import Menu from "./Menu";
import Categories from "./Categories";
import item from "./data";
import logo from "./logo.JPG";

  const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const  App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items)
      return; 
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className=''>
        <div className='title'>
          <img src={logo} alt='logo' className='logo' />
          <h2>Menu List</h2>
          <div className='underline'></div>
        </div>
        <Categories Categories={Categories} activeCategory={activeCategory} filterItems={filterItems} />
      </section>
    </main>
  );
};

export default App;
  