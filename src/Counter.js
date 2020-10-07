import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState();

  return (
    <div>
      <h3>0</h3>
      <button>+</button>
    </div>
  );
}
