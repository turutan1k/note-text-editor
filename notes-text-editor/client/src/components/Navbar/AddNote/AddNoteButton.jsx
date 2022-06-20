import { PlusCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AddNoteButton.module.scss';

const setActive = ({ isActive }) =>
    isActive ? `${s.addNoteBtnActive}` : `${s.addNoteBtn}`;

export default function AddNoteButton(props) {
    return (
        <NavLink to="/add/note" className={setActive}>
            <h2 className={s.addNoteText}>Add Note</h2>
            <PlusCircleOutlined style={{ fontSize: '14x' }} />
        </NavLink>
    );
}
