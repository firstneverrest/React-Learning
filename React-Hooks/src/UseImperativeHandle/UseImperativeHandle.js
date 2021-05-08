import React, { useRef, useEffect } from "react";
import { render } from "react-dom";
// useImperativeHandle use with useRef 
// to access child component HTML element
// rarely use
import ChildInput from "./ChildInput";

function UseImperativeHandle() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <ChildInput ref={inputRef} />
    </div>
  );
}

export default UseImperativeHandle;

