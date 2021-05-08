/* useContext use for creating global props make you easier to manage props across component.
   This means you don't need to pass props in many component to reach target component
   useContext has the same concept as Redux
   class-based component use React.createContext()
*/
import React, { useState } from "react";

import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import UserContext from './UserContext'

const UseContext = () => {
    const [name, setName] = useState('Neverrest')

    return (
        // wrap all of the component that you want to give accessibility 
        // to access your props or data in this component
        // we can send function to other child component as well
        <UserContext.Provider value={{name, setName}}>
            <ComponentA></ComponentA>
            <ComponentB></ComponentB>
        </UserContext.Provider>
    );
}

export default UseContext;
