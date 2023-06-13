import React from 'react';
import style from './Main.module.css';
import myPhotoIMG from'../assets/img/myPhoto.jpg'

const Main = () => {

    const myPhoto = {
        backgroundImage: `url(${myPhotoIMG})`,
    }

    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <div className={style.photo} style={myPhoto}></div>
                <div className={style.text}>
                    <h1>Nadezhda Mitrofanova</h1>
                    <h2>Frontend Developer</h2>
                </div>
            </div>
        </div>
    );
};

export default Main;