import React, {Component} from 'react';
import classes from './Homepage.module.css';
import logo from '../image/logo.png';
import Navbar from './Navbar/Navbar';
import SearchArea from './SearchArea/SearchArea';
import StoreList from './StoreList/StoreList';
import Contact from './Contact/Contact';

class Homepage extends Component {
    render() {
        return (
            <div className= {classes.Homepage}>
                <img className={classes.logo} src={logo} alt="Logo" />
                <p className={classes.title}>フォロ飯</p>

                <Navbar />
                <SearchArea />
                <StoreList />
                <Contact />
            </div>

        );
    }
}

export default Homepage;