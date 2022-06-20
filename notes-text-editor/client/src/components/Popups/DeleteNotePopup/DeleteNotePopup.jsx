import React from 'react';
import DeleteNotePopupButtons from './DeleteNotePopupButtons/DeleteNotePopupButtons';
import DeleteNotePopupContent from './DeleteNotePopupContent/DeleteNotePopupContent';
import s from './DeleteNotePopup.module.scss';
export default function DeleteNotePopup() {
    return (
        <div className={s.popup}>
            <div
                className={s.popupContent}
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className={s.popupTitle}>Delete Note</h2>
                <DeleteNotePopupContent />
                <hr className={s.hr} />
                <DeleteNotePopupButtons />
            </div>
        </div>
    );
}
