import React from 'react';
import style from './Work.module.css';

type SkillPropsType = {
    title: string
    description: string
    style: any
}

const Work = (props: SkillPropsType) => {
    return (
        <div className={style.work}>

            <div className={style.workTopBlock}>
                <div className={style.icon} style={props.style}>
                    <div className={style.preButton}>
                        <button>Watch</button>
                    </div>
                </div>
            </div>

            <div className={style.workBottomBlock}>
                <h3>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    );
};

export default Work;