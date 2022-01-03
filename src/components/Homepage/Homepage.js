import React, {Component} from 'react';
import classes from './Homepage.module.css';
import SearchArea from './SearchArea/SearchArea';
import StoreList from './StoreList/StoreList';
import Contact from './Contact/Contact';
import WebsiteIntro from './WebsiteIntro/WebsiteIntro';
// import CustomPopup from './CustomPopup/CustomPopup';

class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = { visibility: false };
    }

    popupCloseHandler = (e) => {
        this.setState({ visibility : !this.state.visibility })
    };

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
                        {/* <button onClick={(e) => this.setState({ visibility : !this.state.visibility })}>Toggle Popup</button>

                        <CustomPopup
                            onClose={this.popupCloseHandler}
                            show={this.state.visibility}
                            title="Hello Jeetendra"
                        >
                            <h1>Hello This is Popup Content Area</h1>
                            <h2>This is my lorem ipsum text here!</h2>
                        </CustomPopup> */}
                    </div>
                </div>
                <br/>
                <Contact />

            </div>

        );
    }
}

export default Homepage;