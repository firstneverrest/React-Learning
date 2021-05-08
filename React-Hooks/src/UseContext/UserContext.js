/*
    Context use to make every child component that Context warp,
    can approach the props which reduce long props passing.
    --Context Limitations--
    1.Context should not be use in reusable component such as button.
    2.Context is NOT optimized for high frequency changes (use Redux instead).
    3.Context should not be used to replace all component communications
    and props (we use only when it will cause props chain problem).
*/

import { createContext } from "react";

// First, you have to create component for useContext
// set up our context by creating default value
// the advantage is the IDE will recognize and can
// generate auto-complete when you refer to this context.
const UserContext = createContext({
    name: '',
    setName: () => {}
});

export default UserContext;
