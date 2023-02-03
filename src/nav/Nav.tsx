import React from 'react';
import style from './Nav.module.css';
import styleContainer from "../common/styles/Container.module.css";

const Nav = () => {
    return (
        <div className={`${styleContainer.container} ${style.navContainer}`}>
            <div className={style.nav}>
                <a href="">Главная</a>
                <a href="">Скиллы</a>
                <a href="">Проекты</a>
                <a href="">Контакты</a>
            </div>
        </div>
    );
};

export default Nav
;