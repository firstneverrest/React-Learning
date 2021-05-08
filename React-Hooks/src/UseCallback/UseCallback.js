/* useCallback is similar with useMemo but use for function
    which means when we use the same component to render
    such as we want to render card, if we click one card of all
    which make state changed, other component will be re-rendered as well.
    This is not what we want, we want only clicked component be re-rendered
    So, we use useCallback to handle with this problem.
*/

import React, { useCallback } from "react";

import Counter from "./Counter";

function UseCallbackComponent() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  // if we don't use useCallback() the other one will be re-rendered as well
  const increaseCounter1 = useCallback(() => {
    setCount1((count1) => count1 + 1);
  }, []);

  const increaseCounter2 = useCallback(() => {
    setCount2((count2) => count2 + 1);
  }, []);

  return (
    <React.Fragment>
      <Counter value={count1} increaseCounter={increaseCounter1}>
        Counter 1
      </Counter>
      <Counter value={count2} increaseCounter={increaseCounter2}>
        Counter 2
      </Counter>
    </React.Fragment>
  );
}

export default UseCallbackComponent;
