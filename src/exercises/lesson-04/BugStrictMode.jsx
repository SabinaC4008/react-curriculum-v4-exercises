// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => {
      clearInterval(id); // Not sure if this is the solution :/
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
/* Strictmode allows us to catch the error by running the effect twice which means that each second the increment is by 2 rather than 1.
This allows us to see that the useEffect does not have a proper unmount before incrementation occurs again. 
To fix the issue, a return function was added to make sure there is a proper unmount by clearing the interval*/
