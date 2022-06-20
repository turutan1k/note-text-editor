import React, { useContext } from 'react';
import { AppContext } from '../../../../App';
import s from './AddNotePopupButtons.module.scss';
export default function AddNotePopupButtons() {
    const { addNote, close } = useContext(AppContext);
    return (
        <div className={s.popupButtons}>
            <button className={s.addNote} onClick={addNote}>
                Add
            </button>
            <button className={s.cancelAdd} onClick={close}>
                Cancel
            </button>
        </div>
    );
}
