# React Hooks
![image](https://img.shields.io/badge/React_hook-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

React Hooks are a new addition in React 16.8. They let you use React features without writing a class, but use functional component instead. There are many useful Hooks that React developer should know. However, some Hooks are somewhat not easy to understand with their concept. Therefore, I created this repository to keep some examples of How each React Hooks works.

## Rules of Hook
1. Only call React Hooks in React functions (not outside the function) or in custom hooks because it will cause infinite loop.
2. Only call React Hooks at the Top Level
   - Don't call them in nested functions
   - Don't call them in any block statements such as if else statement
3. useEffect() - always add everything you refer to inside of useEffect()
as a dependency.

## Basic Hooks
These Hooks are frequently use in every React project.
- useState - manage state to memorize value
- useEffect - manage lifecycle method like class-based component.
- useContext - creating global props make you easier to manage props across component. This means you don't need to pass props in many component to reach target component. useContext has the same concept as Redux

## Additional Hooks 
These Hooks are less frequently use but still play an important role in React

- useReducer - similar with useState but can implement more complex. useReducer is similar with Redux reducer.
- useMemo - make component not be re-evaluated every time if the props is the same, but will be re-evaluated when props was changed. The way that
useMemo do is comparing the previous value with the new value. But there is a problem - if the props is function or object, it will always be different and useMemo will be useless for checking, so in this case we will use useCallback instead. useMemo is similar with pure component and React.memo().
- useCallback - similar with useMemo but use for function or object which compares by their address.
- useRef - use with 2 reasons
   1. access DOM - use .current to refer to that html tag
   2. contain value - keep value inside and we can access by using .current
- useImperativeHandle - use with useRef to access child component HTML element.
-  useLayoutEffect - have the same signature with useEffect,
    before we will do before browser paints the DOM
    really happened when state is changed
- useDebugValue - can be used to display a label for custom hooks in React DevTools which make you debug easier

## Custom Hook
Custom Hook allows you to build your own hook which can use single React Hook or combine many React Hooks to create custom hook. The custom hook is a JavaScript function whose name starts with "use" like the other React Hooks.