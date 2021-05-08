/*  useLayoutEffect and useEffect have the same signature 
    before we will talk about the difference. Let's find out what is 
    really happened when state is changed
    1. user perform an action such as clicks the button
    2. React updates the count state variable
    3. React handles the DOM mutation which change from previous value
       to new value
    4. the browser paints this DOM change to the browser's screen
    useEffect - After the browser has painted the DOM change, this is when
       the function in useEffect works (useEffect runs after the render
       is committed to the screen)
    useLayoutEffect will do before browser paints the DOM
    beware: useLayoutEffect can slow down the browser to paint the DOM
    which reduce user experience, so in most case we will use useEffect
    Use case: when you want to calculate something about DOM such as height or
    weight and then do something with it before the DOM is painted
*/
import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  // typically, the above code will be executed before below code
  // but in this case, useLayoutEffect is do before useEffect 
  // which means it works before DOM is painted to the browser
  // After the DOM was painted, useEffect will works.   
  useEffect(() => {
    console.log("useEffect function triggered");
  });
  useLayoutEffect(() => {
    console.log("useLayoutEffect function triggered");
  });
  return <div></div>;
};

export default UseLayoutEffect;
