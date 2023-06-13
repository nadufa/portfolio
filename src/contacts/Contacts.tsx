import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <div className={styleContainer.blockName}>
                    <h2>Contacts</h2>
                </div>

                <form className={style.contacts}>
                    <input placeholder={'Name'} type="text"/>
                    <input placeholder={'Company'} type="text"/>
                    <textarea placeholder={'Message'} name="" id="" cols={30} rows={10}></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
};

export default Contacts;