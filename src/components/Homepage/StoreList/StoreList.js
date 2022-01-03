import React, { useState } from 'react';
import classes from './StoreList.module.css';
import b1 from '../../image/bento1.jpg';
// import b2 from '../../image/bento2.jpg';
// import b3 from '../../image/bento3.jpg';
import CustomPopup from '../CustomPopup/CustomPopup';


const useStoreList = () => {
    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };
    return (
        <div className={classes.box}>
            <div className={classes.row}>
                <div className={classes.column} onClick={(e) => setVisibility(!visibility)}>
                    <img className={classes.image} src={b1} alt='b1' />
                    <div>詳細</div>
                </div>

                <CustomPopup
                    onClose={popupCloseHandler}
                    show={visibility}
                    title="Hello Jeetendra"
                >
                    <h1>Hello This is Popup Content Area</h1>
                    <h2>This is my lorem ipsum text here!</h2>
                </CustomPopup>
                {/* <div className={classes.column} >
                    <img src={b2} alt='b2' />
                </div>
                <div className={classes.column} >
                    <img src={b3} alt='b3' />
                </div>*/}
            </div>
        </div>
    );
}

export default useStoreList;