import React from 'react';
import style from './Works.module.css';
import Work from "./work/Work";

const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={style.worksContainer}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.works}>
                    <Work title={'TodoList'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ducimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit Deserunt, ducimus!'} />
                    <Work title={'Social Network'} description={'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ducimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ducimus!'} />
                    <Work title={'Social Network'} description={'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ducimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ducimus!'} />
                </div>
            </div>
        </div>
    );
};

export default Works;