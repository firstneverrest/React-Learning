## Testing
### What tools do we need to test in React
To test React App, we need test runner and testing utilities
1. test runner - executes test (run and test code) and provides validation library (do comparison and throw error), React provide test runner which is Jest.
2. test utilities - render visual DOM to test, React provide test utilities which is Enzyme.

### Three step of testing
1. arrange - when the app is in a certain original state
2. act - when something happen such as click event or input
3. assert - make hypothesis of the new state of the app, if the hypothesis is true, the test will pass

### Three kinds of testing
1. unit test
2. integration test
3. end-to-end test

### What need to be test
1. You need to test all possible scenarios that make sense.

### How to write automated test in React
1. import tools that need to include to the test
    ```javascript
    import { render, screen } from '@testing-library/react';
    ```

2. function that can be used to test
   - test() - create one test and description of the test
   - render() - render component that you want to test
   - expect() - expect the result when you test the component
   - describe() - create test suite which all the test() inside will be combined in the same group or the same test suite 

### Mocks
When you want to test something like fetching data or mess with database - Jest enable you to test by Mock function to test


