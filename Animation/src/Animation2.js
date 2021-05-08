import React, { useState } from "react";

import CSSTransition from "react-transition-group/CSSTransition";
import './Animation2.css';

const Animation2 = (props) => {
  const [openBlock, setOpenBlock] = useState(false);

  const openBlockHandler = () => {
    setOpenBlock(true);
  };

  const closeBlockHandler = () => {
    setOpenBlock(false);
  };

  return (
    <div className="container">
      <CSSTransition
        in={openBlock}
        timeout={300}
        classNames="alert"
        mountOnEnter
        unmountOnExit
      >
        <div className="block">
          <h3>A block</h3>
          <button onClick={closeBlockHandler}>Close</button>
        </div>
      </CSSTransition>
      <button onClick={openBlockHandler}>Open</button>
    </div>
  );
};

export default Animation2;
