import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./skill/Skill";
import reactPhoto from'../assets/img/react.png'
import jsPhoto from'../assets/img/js.png'
import htmlPhoto from'../assets/img/html.png'
import cssPhoto from'../assets/img/css.png'
import storybookPhoto from'../assets/img/storybook.png'
import gitPhoto from'../assets/img/git.png'


const Skills = () => {
    const reactIMG = {
        backgroundImage: `url(${reactPhoto})`,
    }
    const jsIMG = {
        backgroundImage: `url(${jsPhoto})`,
    }
    const htmlIMG = {
        backgroundImage: `url(${htmlPhoto})`,
    }
    const cssIMG = {
        backgroundImage: `url(${cssPhoto})`,
    }
    const storybookIMG = {
        backgroundImage: `url(${storybookPhoto})`,
    }
    const gitIMG = {
        backgroundImage: `url(${gitPhoto})`,
    }
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <div className={styleContainer.blockName}>
                    <h2>Skills</h2>
                </div>
                <div className={style.skills}>
                    <Skill title={'React'} style={reactIMG} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
                    <Skill title={'JS'} style={jsIMG} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
                    <Skill title={'HTML'} style={htmlIMG} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
                    <Skill title={'Css'} style={cssIMG} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, ducimus!'} />
                    <Skill title={'Storybook'} style={storybookIMG} description={'Lorem ipsum dolor sit amet.'} />
                    <Skill title={'Git'} style={gitIMG} description={'Lorem ipsum dolor sit amet.'} />
                </div>
            </div>
        </div>
    );
};

export default Skills;