import React from 'react';
import s from './AddNotePopup.module.scss';
import AddNotePopupButtons from './AddNotePopupButtons/AddNotePopupButtons';
import AddNotePopupContent from './AddNotePopupContent/AddNotePopupContent';

export default function AddNotePopup() {
    return (
        <div className={s.popup}>
            <div
                className={s.popupContent}
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className={s.popupTitle}>Add Note</h2>
                <AddNotePopupContent />
                <AddNotePopupButtons />
            </div>
        </div>
    );
}
