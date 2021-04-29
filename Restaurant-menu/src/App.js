import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item)=>item.category))] 

// new Set() - makes from the all categories only unique (every categories which is repeating will be skiped)

//const allCategories = ['all', ...new Set(items.map((item)=>item.category))]  - means we will create new array with new object 'all' and spread operator '...' add to array rest of the objects

function App() {
  const[menuItems, setMenuItems] = useState(items);
  const[categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    
    const newItems = items.filter((item)=>item.category === category)
    if (category === 'all'){
      return setMenuItems(items)
    }
    setMenuItems(newItems);
  }

  return <main>
    <section className='menu section'>
      <div className="title">
        <h2>Our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </section>
  </main>;
}

export default App;
