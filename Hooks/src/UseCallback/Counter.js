/* you will see, even I use React.memo which means 
   the component will be changed when state is changed
   but why we click counter1 button, counter2 button is re-rendered as well
   the answer is React.memo use reference equality to check if the state
   is the same or the other value is the same, it will not re-render
   but components are different even it is the same component
   [] === [] equals to false, so component is the same
*/
import React from "react";

const Counter = ({ value, children, increaseCounter }) => {
  console.log("Render: ", children);

  return <button onClick={increaseCounter}>{children} : {value}</button>;
};

export default React.memo(Counter);
