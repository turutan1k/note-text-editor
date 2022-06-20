import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

export default function Header() {
    return (
        <header>
            <NavLink className={s.headerLink} to="/">
                Notes Text Editor
            </NavLink>
        </header>
    );
}
