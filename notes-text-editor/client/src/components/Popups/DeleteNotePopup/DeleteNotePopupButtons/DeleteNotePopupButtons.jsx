import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../../../App';
import s from './DeleteNotePopupButtons.module.scss';

export default function DeleteNotePopupButtons() {
    const { id } = useParams(); //возвращает объект ключ/значение динамических параметров из URL - адреса
    const { deleteNote, notes, close } = useContext(AppContext);
    const [note, setNote] = useState({});

    useEffect(() => { 
        setNote(notes.find((note) => note.id === parseInt(id)));
    }, [id, notes]);

    const onHandleDelete = () => {
        deleteNote(note);
    };
    return (
        <div className={s.popupButtons}>
            <button className={s.deleteNote} onClick={onHandleDelete}>
                Delete
            </button>
            <button className={s.cancelDelete} onClick={close}>
                Cancel
            </button>
        </div>
    );
}
