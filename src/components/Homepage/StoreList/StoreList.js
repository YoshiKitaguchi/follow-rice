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
                    title="何て名前だったっけ？"
                >
                    <h2>【高円寺駅 南口徒歩30秒】【キャンペーン中】</h2>
                    <h2> 夜景が楽しめるオシャレなbar </h2>
                    <h2> 東京都杉並区高円寺南４-２７-１０ タイガーデン４階 </h2>
                    <h2> ゆったりとした空間が広がりその中でカラオケや気さくな店員さんとゆっくり飲めるbarです。</h2>
                    <h2> デートやしっぽり飲みたい人にはとてもぴったりでカラオケが無料でついてるのでさまざまな楽しみ方でたのしめます。</h2>
                    <h2> お一人様でも大歓迎 </h2>
                </CustomPopup>
            </div>
        </div>
    );
}

export default useStoreList;