import React from 'react';
import classes from './StoreList.module.css';
import b1 from '../../image/bento1.jpg';
import b2 from '../../image/bento2.jpg';
import b3 from '../../image/bento3.jpg';


const useStoreList = () => {
    return (
        <div className={classes.box}>
            <div className={classes.row}>
                <div className={classes.column}>
                    <img src={b1} alt='b1' />
                </div>
                <div className={classes.column} >
                    <img src={b2} alt='b2' />
                </div>
                <div className={classes.column} >
                    <img src={b3} alt='b3' />
                </div>
                <div className={classes.column}>
                    <img src={b1} alt='b1' />
                </div>
                <div className={classes.column} >
                    <img src={b2} alt='b2' />
                </div>
                <div className={classes.column} >
                    <img src={b3} alt='b3' />
                </div>
            </div>
        </div>
    );
}

export default useStoreList;