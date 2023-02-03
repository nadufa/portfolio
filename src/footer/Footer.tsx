import React from 'react';
import style from './Footer.module.css';
import styleContainer from './../common/styles/Container.module.css';

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3>Митрофанова Надежда</h3>
                <div className={style.footerItems}>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                </div>
                <h3>Все права защищены</h3>
            </div>
        </div>
    );
};

export default Footer;