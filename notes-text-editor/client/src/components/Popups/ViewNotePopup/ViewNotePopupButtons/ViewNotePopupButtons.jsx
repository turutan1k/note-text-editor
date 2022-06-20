import React, { useContext } from 'react';
import { AppContext } from '../../../../App';
import s from './ViewNotePopupButtons.module.scss';

export default function ViewNotePopupButtons() {
    const close = useContext(AppContext);

    return (
        <div className={s.popupButtons}>
            <button className={s.cancelAdd} onClick={close}>
                Cancel
            </button>
        </div>
    );
}
