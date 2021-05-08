import React, { useRef, useImperativeHandle, forwardRef } from "react";

function ChildInput(props, ref) {
  const inputRef = useRef(null);

  // first argument - ref (for binding value)
  // second argument - function that return object (what you want to access)
  useImperativeHandle(ref, () => inputRef.current);

  return <input type="text" name="child input" ref={inputRef} />;
}

// wrap component with forwardRef
export default forwardRef(ChildInput);
