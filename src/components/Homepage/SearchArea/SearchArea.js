import React from 'react';
import classes from './SearchArea.module.css';
import { FaSearch } from "react-icons/fa"

const useSearchArea = () => {
    return (
         <div className={classes.box}>
            {/* <a class="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a> */}
            <input type="text" placeholder="Search.."/>
            <button type="submit"><FaSearch /></button>
         </div>
    );
}

export default useSearchArea;