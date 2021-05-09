## Animating React App
normally, we use CSS transition or CSS animation keyframe to animate in React. However, they all have some disadvantages which are rendering element before it will be show, and if we want to remove or unmounted the element, the animation will not be shown because React has unmounted that element already.

So, the solution is using third party package called [react-transition-group](https://reactcommunity.org/react-transition-group/)

## Installation
`npm install react-transition-group --save`

## How to use react-transition-group
React Transition Group has four main components that help you do animation easily. Let's get started with the basic one.

### Transition component
Transition component lets you describe a transition from one component state to another. It's most commonly used to animate the mounting and unmounting a component. Transition component need to create style in JS file. If you would like to use CSS file, use CSSTransition component instead.

```javascript
import Transition from 'react-transition-group/Transition'
...
return (
    <div className={classes.container}>
      <h2>Transition</h2>
      <Transition in={openBlock} timeout={300} mountOnEnter unmountOnExit>
        {/* {openBlock && <div className={classes.block}></div>} */}
        {(state) => (
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "1rem auto",
              transition: "opacity .3s ease-out",
              opacity:
                state === "exiting" ? 0 : 1,
            }}
          ></div>
        )}
      </Transition>
      <button onClick={openBlockHandler}>Open Red Block</button>
      <button onClick={closeBlockHandler}>Close Red Block</button>
    </div>
  );
</div>
```

* in attribute = when the variable in {} is true, all elements in the Transition component will be rendered.
* timeout attribute = set state change duration in millisecond unit
* mountOnEnter = mount when variable in in attribute is true
* unmountOnExit = unmount when variable in in attribute is false
* onEnter - run code before the "entering" status is applied
* onEntering - run code after the "entering" status is applied
* onEntered - run code after the "entered" status is applied
* onExit - run code before the "exiting" status is applied
* onExiting - run code after the "exiting" status is applied
* onExited - run code after the "exited" status is applied

#### Transition has 4 main states
1.  entering - component is mounting or rendering.
2.  entered - component was rendered.
3.  exiting - component is unmounting.
4.  exited - component was unmounted.

#### Animation timing
you can set enter and exit animation timing
```javascript
    const animationTiming = {
        enter: 300,
        exit: 1000
    }
```
### CSSTransition
CSSTransition applies a pair of class names during the appear, enter, and exit states of the transition. When you use CSSTransition, you don't need to write state but you write classNames attribute to change style when states is changed. In CSSTransition you just put only the element that you want to render.

```javascript
    import CSSTransition from "react-transition-group/CSSTransition";
    ...
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
```

An example above, you would see alert classNames and these are all class behind the scene in CSS file.
1.  alert-enter
2.  alert-enter-active
3.  alert-exit
4.  alert-exit-active

### TransitionGroup
TransitionGroup manages a set of transition components (Transition and CSSTransition) in a list. When you need to render component in a list such as map function, you need TransitionGroup to make each component in a list has animation.

```javascript
import {CSSTransition, TransitionGroup} from "react-transition-group/CSSTransition";
...
  <TransitionGroup className="todo-list">
    {items.map(({ id, text }) => (
      <CSSTransition
        key={id}
        timeout={500}
        classNames="item"
      >
        <ListGroup.Item>
          <Button
            className="remove-btn"
            variant="danger"
            size="sm"
            onClick={() =>
              setItems(items =>
                items.filter(item => item.id !== id)
              )
            }
          >
            &times;
          </Button>
          {text}
        </ListGroup.Item>
      </CSSTransition>
    ))}
  </TransitionGroup>
```

## Other alternatives
1. React-Motion
2. React-Move
3. React-Router-Transition