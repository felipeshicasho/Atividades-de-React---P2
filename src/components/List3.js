import React, { useState } from 'react';

function List3() {
  const [list, setList] = useState(['Tomatoes', 'Pasta', 'Coconut']);

  function handleClick() {
    const newItem = prompt('What item would you like to add?');
    if (newItem) {
      const insertAt = 1; // Could be any index
      const nextList = [
        ...list.slice(0, insertAt),
        newItem,
        ...list.slice(insertAt)
      ];
      setList(nextList);
    }
  }

  return (
    <div>
      <h2>Shopping List</h2>
      <button onClick={handleClick}>Add Item</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List3; 