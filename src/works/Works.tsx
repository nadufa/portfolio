import React from 'react';
import style from './Works.module.css';
import Work from "./work/Work";
import styleContainer from "../common/styles/Container.module.css";
import socialPhoto from'../assets/img/social.jpg'
import todolistPhoto from'../assets/img/todolist.jpg'

const Works = () => {
    const socialIMG = {
        backgroundImage: `url(${socialPhoto})`,
    }
    const todolistIMG = {
        backgroundImage: `url(${todolistPhoto})`,
    }
    return (
        <div className={style.worksBlock}>
            <div className={style.worksContainer}>
                <div className={styleContainer.blockName}>
                    <h2>Projects</h2>
                </div>

                <div className={style.works}>
                    <Work title={'TodoList'} style={todolistIMG} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ducimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit Deserunt, ducimus!'} />
                    <Work title={'Social Network'} style={socialIMG} description={'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ducimus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ducimus!'} />
                </div>
            </div>
        </div>
    );
};

export default Works;