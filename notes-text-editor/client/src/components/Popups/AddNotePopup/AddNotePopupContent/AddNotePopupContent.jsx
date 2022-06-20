import React, { useContext } from 'react';
import { AppContext } from '../../../../App';
import setTextAreaHeight from '../../../../functions/setTextAreaHeight';
import s from './AddNotePopupContent.module.scss';

export default function AddNotePopupContent() {
    const { note, setNote, findDescriptionHashtags } = useContext(AppContext);

    let onNameChange = (e) => {
        setTextAreaHeight(e, '59px');
        setNote({
            ...note,
            name: e.target.value,
        });
    };

    let onDescriptionChange = (e) => {
        let foundDescriptionTags = findDescriptionHashtags(e.target.value);
        console.log(foundDescriptionTags);
        setTextAreaHeight(e, '100px');
        setNote({
            ...note,
            description: e.target.value,
            descriptionTag: foundDescriptionTags,
        });
    };

    return (
        <>
            <div className={s.content}>
                <textarea
                    type="text"
                    placeholder="Type note name here..."
                    className={s.noteName}
                    maxLength="50"
                    required
                    value={note.name}
                    onChange={onNameChange}
                />
                <textarea
                    type="text"
                    placeholder="Type note description here..."
                    className={s.noteDescription}
                    maxLength="500"
                    value={note.description}
                    onChange={onDescriptionChange}
                />
                <hr className={s.hr} />

                <div className={s.noteTagWrapper}>
                    <h2 className={s.tagsTitle}>Tags in the description:</h2>
                    <div className={s.noteTag}>
                        <h3 className={s.tag}>{note.descriptionTag}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}
