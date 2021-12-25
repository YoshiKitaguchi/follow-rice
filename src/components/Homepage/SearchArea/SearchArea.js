import React from 'react';
import classes from './SearchArea.module.css';
import { FaSearch } from "react-icons/fa"

const useSearchArea = () => {
    return (
         <div className={classes.box}>
            <input type="text" placeholder="Search.."/>
            <button type="submit"><FaSearch /></button>
            <a className={classes.a1} href="#home">tag</a>
            <p>About</p>
            <p href="#contact">Contact</p>
         </div>
    );
}

export default useSearchArea;