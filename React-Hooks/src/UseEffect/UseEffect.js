 /* useEffect use to manage lifecycle method like class-based component
    This component will be re-rendered which make this useEffect works
    What should be add as dependencies?
    - state
    - props
    What should not be add as dependencies?
    - setState
    - component-external variable (outside component) because it's change 
    will not cause the component to be re-rendered.
  */

import React, { useState, useEffect } from "react";

function useEffectComponent() {
  const [count, setCount] = useState(0);
  const [threeCount, setThreeCount] = useState(0);

 
  /*   First way - componentDidUpdate() in this way you can write code
     anywhere in this function to behave like this, so we don't typically
     use useEffect in this way. This will runs after every component render cycle*/
  //   useEffect(() => {
  //     document.title = `You clicked ${count} times`;
  //   });

  // Second way - componentDidMount() which do only once
  //   useEffect(() => {
  //     document.title = `You clicked ${count} times`;
  //   }, []);

  // Third way - componentDidUpdate() which works when dependencies was changed
  //   useEffect(() => {
  //     document.title = `threeCount: ${threeCount}`;
  //     console.log("threeCount was rendered");
  //   }, [threeCount]);

  // Fourth way - componentWillUnMount() which works before the component is unmounted 
  // Use clean up function
  //   useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       alert("timeout!");
  //     }, 2000);
  //     return () => clearTimeout(timeout); // when component was unmounted, it will delete latest time
  //   }, [count]);

  /*
      clean up function: clearTimeout(timer)
      - when new action is occurred, it will stop every earlier action 
      (reset and focus on the new action).
      - runs before every new side effect function execution.

  */
  const countHandler = () => {
    setCount(count + 1);
    if (count % 3 === 0) setThreeCount(threeCount + 1);
  };

  return (
    <div className="useEffectComponent">
      <h3>UseEffect</h3>
      <p>{count}</p>
      <button onClick={countHandler}>Click me</button>
    </div>
  );
}

export default useEffectComponent;
