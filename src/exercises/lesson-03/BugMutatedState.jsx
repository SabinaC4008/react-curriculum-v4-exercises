// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState, useEffect } from 'react';
export default function BugMutatedState() {
  let [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1); //I think the issue is that it's updating outside of the setCount function?
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
/* 
Issue: 
The issue is that the original code was changed outside of the setter function
which means that the code was not re-rendering upon count changing but when setCount was being called. 
While the function of the code is largely the same, the original code causes a lack of syncrohization between count updating and the render updating. 

Fix: 
//Changed the code to update count in the setter function so the change in count is caused by the setter function.
*/
