import React, {Component} from 'react';
import classes from './Homepage.module.css';
import logo from '../image/logo.png';
import Navbar from './Navbar/Navbar';
import SearchArea from './SearchArea/SearchArea';

class Homepage extends Component {
    render() {
        return (
            <div className= {classes.Homepage}>
                <img className={classes.logo} src={logo} alt="Logo" />
                <p className={classes.title}>フォロ飯</p>

                <Navbar />
                <SearchArea />

            </div>

        );
    }
}

export default Homepage;