// useState use to manage state to memorize value
// in class component use this.state = {}
import React, { useState } from "react";

function useStateComponent() {
  // This is useState syntax which use array destructuring
  // you can use React.useState(0) instead of useState(0)
  const [count, setCount] = useState(0);

  // This will be re-render every time you click the button
  // Re-render when count state was changed
  console.log("useStateComponent is rendered");

  return (
    <div className="useStateComponent">
      <h3>UseState</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default useStateComponent;
