import React from 'react';
import s from './NoteItemName.module.scss';
export default function NoteItemName(props) {
    return (
        <>
            <h2 className={s.noteItemName}>{props.name}</h2>
        </>
    );
}
