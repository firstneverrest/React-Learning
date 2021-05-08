import React from "react";
import useUpdateLogger from "./useUpdateLogger";
import useLocalStorage from "./useLocalStorage";

function UseCustomHook() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

export default UseCustomHook;
