import React from 'react';
import s from './NoteItemDescription.module.scss';

export default function NoteItemDescription(props) {
    return (
        <div className={s.noteItemDescription}>
            <span className={s.descriptionText}>{props.description}</span>
        </div>
    );
}
