import React, { useState } from 'react';

function List() {
  const [list, setList] = useState(['Tomatoes', 'Pasta', 'Coconut']);

  function handleClick() {
    const newItem = prompt('What item would you like to add?');
    if (newItem) {
      setList([...list, newItem]);
    }
  }

  function handleRemoveClick(index) {
    setList(list.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Shopping List</h2>
      <button onClick={handleClick}>Add Item</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveClick(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List; 