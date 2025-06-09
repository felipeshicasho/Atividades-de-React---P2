import React, { useState } from 'react';

function List4() {
  const [list, setList] = useState(['Tomatoes', 'Pasta', 'Coconut']);

  function handleClick() {
    const newItem = prompt('What item would you like to add?');
    if (newItem) {
      setList([...list, newItem]);
    }
  }

  function handleSortClick() {
    setList([...list].sort());
  }

  return (
    <div>
      <h2>Shopping List</h2>
      <button onClick={handleClick}>Add Item</button>
      <button onClick={handleSortClick}>Sort List</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List4; 