/* useRef() use with 2 reasons
   1. access DOM - use .current to refer to that html tag
   2. contain value - keep value inside and we can access by using .current
   but how is it different from useState?
   -both use to remember their data after re-render
   -useState should be used when the value of state should be updated with re-rendering.
   -useRef should be used when you want your information persists for the lifetime of the component
   and it's will not cause re-rendering
   for example, if the component is unmounted, value in ref will still existed but if you
   use setState() in useState() it can't be set the value because the component is unmounted. 
   class-based component - use React.createRef()

   ---caution---
   when we use state to manipulate the element, that component is called "controlled component"
   which means you use React to control that element.
   but if you use Ref, it will connect to the HTML element (real DOM) - This is called "uncontrolled component"
   which means it doesn't use React to control.
*/
import React, { useRef, useEffect } from "react";

const UseRefComponent = () => {
  // testing useState vs useRef
  const [state, setState] = React.useState("");

  // access DOM
  const inputRef = useRef(null);

  // contain value
  const valueRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // useRef will not cause infinite loop because it not cause re-rendered
  useEffect(() => {
    valueRef.current = Math.random().toString();
    setTimeout(() => {
      console.log(valueRef.current);
    }, 3000);
  });

  // if we use setState, it will clause re-rendered and become infinite loop
  // useEffect(() => {
  //   setState(Math.random().toString());
  //   setTimeout(() => {
  //     console.log(state);
  //   }, 3000);
  // });

  console.log("re-rendered");

  return (
    <form>
      <input type="text" placeholder="Enter Name" name="name" ref={inputRef} />
    </form>
  );
};

export default UseRefComponent;
