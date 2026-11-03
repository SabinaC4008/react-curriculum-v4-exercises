// TOPIC: Choose the correct tool: useRef vs useState

import { useState } from 'react';

// TASK: Make sure it updates the text *without* triggering a re-render
export default function FindCorrectHook() {
  //let clickCount = 0; // ← incorrect implementation
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

/* I think it is useState because it is being using in the body - need to check with mentor because of the rerender part*/
