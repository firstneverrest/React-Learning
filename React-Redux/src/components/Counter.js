/* useSelector is a very useful hook. 
   it enables you to select state from store
   and re-executed every time when state is changed
   which means it auto-subscription to the store
   
   useDispatch will return function to the variable

   in class-based component you have to use connect 
   instead of these two hooks (functional component 
   also can use connect but use hooks is more convenient)
*/
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // {type: IDENTIFIER, payload: 10}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  // const incrementHandler = () => {
  //   dispatch({ type: "increment" });
  // };

  // const increaseHandler = () => {
  //   dispatch({ type: "increase", amount: 10 });
  // };

  // const decrementHandler = () => {
  //   dispatch({ type: "decrement" });
  // };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class-based component
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => { // useSelector
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => { // useDispatch
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
