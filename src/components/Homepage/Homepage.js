import React, {Component} from 'react';
import classes from './Homepage.module.css';
import SearchArea from './SearchArea/SearchArea';
import StoreList from './StoreList/StoreList';
import Contact from './Contact/Contact';
import WebsiteIntro from './WebsiteIntro/WebsiteIntro';

class Homepage extends Component {
    render() {
        return (
            <div className= {classes.Homepage}>

                <div className={classes.titlebox}>
                    <p className={classes.title}>フォロ飯</p>
                </div>

                <div className={classes.contentarea}>
                    <div className={classes.contentbox}>
                        <h2><span>ウェブサイト紹介</span></h2>
                        <br/>
                        <WebsiteIntro/>
                        <h2><span>店舗一覧</span></h2>
                        <br/>
                        <SearchArea />
                        <StoreList />
                    </div>
                </div>
                <br/>
                <Contact />

            </div>

        );
    }
}

export default Homepage;