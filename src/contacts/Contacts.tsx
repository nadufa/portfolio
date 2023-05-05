import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css';

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <h3>Контакты</h3>
                <form className={style.contacts}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    );
};

export default Contacts;