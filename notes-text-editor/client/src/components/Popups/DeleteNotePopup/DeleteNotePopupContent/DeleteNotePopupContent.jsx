import React from 'react';
import s from './DeleteNotePopupContent.module.scss';
export default function DeleteNotePopupContent() {
    return (
        <div className={s.deletePopupMessage}>
            Are you sure u want to delete this note?
        </div>
    );
}
