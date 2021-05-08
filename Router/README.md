## React-Router
React Router is a collection of navigational components that compose declaratively with your application. This let you create powerful navigation bar easily. 

### Dependency: react-router-dom
### Install React-Router
`npm install react-router-dom `

### How to use react router?
1. in index.js, you have to wrap the components that you would like to use router with **BrowserRouter**.
    
    ```javascript
    import { BrowserRouter } from 'react-router-dom'
    ```

2. So now, you can start using router everywhere in react project. For example, if you want to use in App.js
    ```javascript
    import { Route, Switch, Redirect } from 'react-router-dom'`
    ```
    Route - define what url is and what component will be rendered
    
    Switch - use to wrap Route components to allow rendering only one route in the same time

    Redirect - redirect to another route when the user go to route that you define
3. exact - solve rendering multiple route problem because of matching urls by making route can be rendered only when route name is the same as what url is - So, it can be only one route in the same time
4. useParams - get access to params from url by
    ```javascript
    import { useParams } from 'react-router-dom';

    const params = useParams();
    <p>Params: {params.schoolId}</p>
    ``` 
5. Nested route - you can use Route in Route
6. Navigation link - react router enable you to create link like `<a>` tag
    ```javascript
    import { Link, NavLink } from 'react-router-dom'
    ```
    Link - like `<a>` but doesn't send new request to the server to get new html file which means it doesn't cause reloading page

    NavLink - similar to Link but you can easily style link by add activeClassName attribute in NavLink tag
7. Not found page - if user enter undefined route, you can redirect user to the not found page by using * to be a path
   ```html
    <Route path='*'>
        <NotFound />
    </Route>
    ```
8. Implementing programmatic navigation - trigger a navigation action and navigate the user away to other route in your code by using **useHistory**
   ```javascript
    import { useHistory } from 'react-router-dom'

    const history = useHistory();

    const addSchoolHandler = (data) => {
        history.push('/school');
    }
    ``` 
    `history.push('/school')` - allow user to go back

    `history.replace('/school')` - not allow user to go back

9. Preventing Possibly unwanted route transitions - when user accidentally press back button, this will cause value in the form disappear. So, you can use **Prompt component** to prevent this action.

    *  First, use onFocus attribute in `<form>` and link to function
    *  use useState to keep state that user is entering form or not
    *  use Prompt component
    
        ```javascript
        import { Prompt } from 'react-router-dom'
        ```
        ```html
        <Prompt when={isEntering} message={(location) => 'Are you sure?'}>
        ```
        if isEntering is true, Prompt will show up as a alert window and message define the message in the Prompt.
    * set entering to false when click submit button
10. 