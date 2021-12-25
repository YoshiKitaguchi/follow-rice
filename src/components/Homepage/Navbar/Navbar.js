import React from 'react';
import classes from './Navbar.module.css';


const useNavbar = () => {
    return (
         <div className={classes.laptop}>
            <ul>
            <li>home</li>
            <li>overview</li>
            <li>demo</li>
            <li>people</li>
            <li><div className={classes.login} >{'launch'}</div></li>
            </ul>
         </div>
    );
}

export default useNavbar;