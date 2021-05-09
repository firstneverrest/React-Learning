const redux = require("redux");

// reducer function
// (state, action) means receive old state and action from dispatch
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
};

// create central data store which receive reducer function as a parameter
const store = redux.createStore(counterReducer);

// component
const counterSubscriber = () => {
  // get latest state
  const latestState = store.getState();
  console.log(latestState);
};

// define subscribe for component
store.subscribe(counterSubscriber);

// send dispatch to reducer function with action.type = increment 
// and action.type = 
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
