import React from 'react';
import s from './EditNotePopup.module.scss';
import EditNotePopupContent from './EditNotePopupContent/EditNotePopupContent';

export default function EditNotePopup() {
    return (
        <div className={s.popup}>
            <div className={s.popupContent}>
                <h2 className={s.popupTitle}>Edit Note</h2>
                <EditNotePopupContent />
            </div>
        </div>
    );
}
