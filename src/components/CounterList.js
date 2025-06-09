import React, { useState } from 'react';

function CounterList() {
  const [counters, setCounters] = useState([0, 0, 0]);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <div>
      {counters.map((counter, i) => (
        <div key={i}>
          <h1>{counter}</h1>
          <button onClick={() => handleIncrementClick(i)}>
            +1
          </button>
        </div>
      ))}
    </div>
  );
}

export default CounterList; 