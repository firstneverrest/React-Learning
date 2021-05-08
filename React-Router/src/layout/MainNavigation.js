import React from 'react'

import classes from './MainNavigation.module.css'
import {NavLink} from 'react-router-dom'

const MainNavigation = () => {


    return (
        <header className={classes.header}>
           <div className={classes.logo}>My Logo</div> 
           <nav className={classes.nav}>
               <ul>
                   <li>
                       <NavLink to="/classroomA" activeClassName={classes.active}>
                           Classroom A
                       </NavLink>
                   </li>
                   <li>
                       <NavLink to="/classroomB" activeClassName={classes.active}>
                           Classroom B
                       </NavLink>
                   </li>
                   <li>
                       <NavLink to="/classroomC" activeClassName={classes.active}>
                           Classroom C
                       </NavLink>
                   </li>
               </ul>
           </nav>
        </header>
    )
}

export default MainNavigation