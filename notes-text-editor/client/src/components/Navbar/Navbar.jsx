import React from 'react';
import AddNote from './AddNote/AddNoteButton';
import Filter from './Filter/Filter';
import s from './Navbar.module.scss';
export default function Navbar() {
    return (
        <div className={s.navbarWrapper}>
            <h2 className={s.navbarHeaderText} style={{ fontSize: '18px' }}>
                Options:
            </h2>
            <AddNote />
            <div className={s.navbarFilter}>
                <Filter />
            </div>
        </div>
    );
}
