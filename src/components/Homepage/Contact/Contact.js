import React from 'react';
import classes from './Contact.module.css';
import { FaYoutube, FaTwitter,  FaEnvelope, FaPhone } from "react-icons/fa"

const useContact = () => {
    return (
         <div className={classes.box}>
            <hr/>

            <div className={classes.iconarea}>
                <FaYoutube className={classes.icon}/>
                <FaTwitter className={classes.icon}/>
                <FaEnvelope className={classes.icon}/>
                <FaPhone className={classes.icon}/>
            </div>

            <br/>
            <br/>
            <h5>Copyright © Sonoda</h5>
            
         </div>
    );
}

export default useContact;