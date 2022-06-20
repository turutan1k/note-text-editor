import React from 'react'; // ,{ useContext }
// import { Context } from '../../../App';
import s from './ViewNotePopup.module.scss';
import ViewNotePopupContent from './ViewNotePopupContent/ViewNotePopupContent';

export default function ViewNotePopup({ active, setActive }) {
    // const context = useContext(Context);

    // if (!context) return null;

    return (
        <div
            // className={active ? `${s.popupActive}` : `${s.popup}`}
            className={s.popup}
            // onClick={() => setActive(false)}Z
        >
            <div
                className={s.popupContent}
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className={s.popupTitle}>View Note</h2>
                <ViewNotePopupContent />
            </div>
        </div>
    );
}
