import React, { useState } from 'react';

function List2() {
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

  function handleReverseClick() {
    setList([...list].reverse());
  }

  return (
    <div>
      <h2>Shopping List</h2>
      <button onClick={handleClick}>Add Item</button>
      <button onClick={handleReverseClick}>Reverse List</button>
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

export default List2; 