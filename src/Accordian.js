import React, { useState } from 'react';

export function Accordian() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      {visible ? <h3>Show Me</h3> : null}
      <button onClick={() => setVisible(false)}>Toggle</button>
    </div>
  );
}
