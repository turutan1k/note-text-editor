import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../../App';
import s from './ViewNotePopupContent.module.scss';
import bs from '../ViewNotePopupButtons/ViewNotePopupButtons.module.scss';
import { useParams } from 'react-router-dom';

export default function ViewNotePopupContent() {
    const { id } = useParams(); //возвращает объект ключ/значение динамических параметров из URL - адреса
    const { notes, close } = useContext(AppContext);
    const [note, setNote] = useState({});

    useEffect(() => {
        setNote(notes.find((note) => note.id === parseInt(id)));
    }, [id, notes]);

    return (
        <>
            <div className={s.content}>
                <textarea
                    readOnly
                    type="text"
                    className={s.noteName}
                    maxLength="50"
                    value={note.name}
                />
                <textarea
                    readOnly
                    type="text"
                    placeholder="Type note description here..."
                    className={s.noteDescription}
                    maxLength="500"
                    value={note.description}
                />
                <hr className={s.hr} />
                <div className={s.noteTagWrapper}>
                    <h2 className={s.tagsTitle}>Tags in the description:</h2>
                    <div className={s.noteTag}>{note.descriptionTag}</div>
                </div>
                <div className={bs.popupButtons}>
                    <button className={bs.closePopup} onClick={close}>
                        Cancel
                    </button>
                </div>
            </div>
        </>
    );
}
