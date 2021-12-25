import React from 'react';
import classes from './Contact.module.css';


const useContact = () => {
    return (
         <div className={classes.box}>
            <ul>
            <li className={classes.text}>contact us</li>
            <li className={classes.text}>about us</li>
            <li className={classes.text}>issue report</li>
            <li className={classes.text}>location</li>
            </ul>
         </div>
    );
}

export default useContact;