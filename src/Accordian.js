// My example
// import React, { useState } from 'react';

// export function Accordian() {
//   const [visible, setVisible] = useState(true);
//   return (
//     <div>
//       {visible ? <h3>Show Me</h3> : null}
//       <button onClick={() => setVisible(false)}>Toggle</button>
//     </div>
//   );
// }

import React, { useState } from 'react';

export function Accordian() {
  const [isToggled, setIsToggled] = useState(false);
  const showMe = isToggled ? <h3>Show Me</h3> : null;
  return (
    <div>
      {showMe}
      {/* {isToggled && <h3>Show Me</h3>} */}
      {/* {isToggled ? <h3>Show Me</h3> : null} */}

      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
    </div>
  );
}
