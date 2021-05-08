/* useMemo is similar with pure component and React.memo()
   but use for value
   re-evaluated or re-executed != re-rendered
   1. re-rendered - render new UI on screen which means React check 
   virtual DOM snapshot and the real DOM. If it isn't change the 
   appearance or UI, it will not re-rendered.
   ** re-rendered happen when props, state or context changed.
   2. re-evaluated - when React is executed, it not means React will
   always re-rendered such as child component change state and that state
   is pass from the parent component, the child component is only the one 
   that re-rendered but the parent is not. So, the parent is just re-evaluated
   but not change the UI itself.
   ** every time the parent changes (props or something) - child components
   will also re-evaluated and re-executed.
   
   So -> how to prevent inessential re-evaluated?
   the answer is use UseMemo.
*/

import React, { useState, useMemo } from "react";

function useMemoComponent() {
  const [count, setCount] = useState(0);

  const getMessage = () => {
    console.log("getMessage was rendered");
    return "This is getMessage component";
  };

  // This is normal way to get value from function which cause getMessage
  // to render every time when some state was changed
  // const memoizedValue = getMessage();

  // useMemo make getMessage not re-render every time 
  // but will be re-rendered when dependency was changed
  // const memoizedValue = useMemo(getMessage, []);

  return (
    <div className="useMemoComponent">
      <h3>UseMemo</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );

}

export default useMemoComponent;
