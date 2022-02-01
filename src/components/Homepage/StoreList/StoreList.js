import React, { useState } from 'react';
import classes from './StoreList.module.css';
import s1_1 from '../../image/s1_1.jpg';
import CustomPopup from '../CustomPopup/CustomPopup';
// import  Text  from "react-native";


const useStoreList = () => {
    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };
    return (
        <div className={classes.box}>
            <div className={classes.row}>
                <div className={classes.column} onClick={(e) => setVisibility(!visibility)}>
                    <img className={classes.image} src={s1_1} alt='s1_1' />
                    <div>詳細</div>
                </div>

                <CustomPopup
                    onClose={popupCloseHandler}
                    show={visibility}
                    title="Bar Laugh Tale"
                >
                    <h3 className={classes.text}>
                        {`
                            【高円寺駅 南口徒歩30秒】【キャンペーン中】

                            夜景が楽しめるオシャレなbar

                            東京都杉並区高円寺南４-２７-１０ タイガーデン４階

                            ゆったりとした空間が広がりその中でカラオケや気さくな店員さんとゆっくり飲めるbarです。

                            デートやしっぽり飲みたい人にはとてもぴったりでカラオケが無料でついてるのでさまざまな楽しみ方でたのしめます。

                            お一人様でも大歓迎
                        `}
                    </h3>
                </CustomPopup>
            </div>
        </div>
    );
}

export default useStoreList;