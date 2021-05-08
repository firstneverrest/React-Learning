## Redux
redux is a state management system for cross-component or app-wide state.
The objective of Redux is similar with Context in React which manage the state, but there are the difference.

### Why we don't use Context?
context has two main disadvantages
1. not suitable for complex state and management - can create nested code
2. not suitable with high frequency change in state - lead to low performance

### Redux concept
1. central data store - keep state value
2. components - subscription state value from central data store, when the state is changed: the components will update.
3. dispatch - when component want to make change to the state, it can dispatch - tell redux what action that you want Redux to do.
4. action - type of what you want Redux to do
5. reducer function - function that you create to receive action and do something depend on what action is. 
6. when the reducer function do something depend on action, it will make change to state and keep that value in the central data store