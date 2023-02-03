import React from 'react';
import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css';

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>I am Nadezhda Mitrofanova</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;