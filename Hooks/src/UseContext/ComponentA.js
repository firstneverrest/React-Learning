// This require useContext to refer to useContext that parent use
import React, { useContext } from "react";
import UserContext from "./UserContext";

const ComponentA = () => {
  const { name, setName } = useContext(UserContext);

  return (
    <div>
      <h3>ComponentA</h3>
      <h4>{name}</h4>
      <button onClick={() => setName("John")}>Change Name to John</button>
    </div>
  );
};

export default ComponentA;
