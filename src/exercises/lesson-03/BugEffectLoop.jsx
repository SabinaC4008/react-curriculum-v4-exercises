//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Write your explanation here)
/*
Issue: 
The issue is that the useEffect updates the setCount. 
The useEffect contains functions we want to execute on render or re-render. 
Because we change the value of a state, we trigger a re-render which causes useEffect to call the functions within it again. 
This causes an infinite loop where the browser keeps re-rendering to update the button and doesn't stop. 

Fix: 
Add an empty array as a second argument to useEffect. This will tell React that the first arugement 
to useEffect will occur only once at the start or when a state in the array is updated(if we had a different variable in the array). 

*/
