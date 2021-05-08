import React, { useState } from "react";

import classes from "./Animation.module.css";
import Transition from "react-transition-group/Transition";

const Animation = () => {
  const [openBlock, setOpenBlock] = useState(false);

  const openBlockHandler = () => {
    setOpenBlock(true);
  };

  const closeBlockHandler = () => {
    setOpenBlock(false);
  };

  const animationTiming = {
    enter: 500,
    exit: 1000,
  };

  return (
    <div className={classes.container}>
      <h2>Transition</h2>
      <Transition
        in={openBlock}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
        onEnter={() => console.log('onEnter')}
        onEntering={() => console.log('onEntering')}
        onEntered={() => console.log('onEntered')}
        onExit={() => console.log('onExit')}
        onExiting={() => console.log('onExiting')}
        onExited={() => console.log('onExited')}
      >
        {(state) => (
          /* {openBlock && <div className={classes.block}></div>} */
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "1rem auto",
              transition: "opacity .3s ease-out",
              opacity: state === "exiting" ? 0 : 1,
            }}
          ></div>
        )}
      </Transition>
      <button onClick={openBlockHandler}>Open Red Block</button>
      <button onClick={closeBlockHandler}>Close Red Block</button>
    </div>
  );
};

export default Animation;
