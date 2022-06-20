import React, {
    // useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import setTextAreaHeight from '../../../../functions/setTextAreaHeight';
import s from './EditNotePopupContent.module.scss';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../../../App';

// import { Editor, EditorState } from 'draft-js';

export default function EditNotePopupContent() {
    const { id } = useParams(); //возвращает объект ключ/значение динамических параметров из URL - адреса
    const { editNote, notes, close, findDescriptionHashtags } =
        useContext(AppContext);
    const [note, setNote] = useState({});

    // const [editorState, setEditorState] = useState(EditorState.createEmpty());
    // const content = EditorState.getCurrentContent();
    // console.log('content= ', content);
    // let onEditorStateChange = useCallback((editorState) => {
    //     setEditorState
    //     let foundDescriptionTags = findDescriptionHashtags(e.target.value);

    //     setTextAreaHeight(e, '100px');
    //     setNote({
    //         ...note,
    //         description: e.target.value,
    //         descriptionTag: foundDescriptionTags,
    //     });
    // });

    // function hashtagMonospace(contentBlock) {
    //     const type = contentBlock.getType();
    //     if (type === 'monospace') {
    //         return 'superFancyMonospace';
    //     }
    // }

    // const editor = useRef(null);

    useEffect(() => {
        setNote(notes.find((note) => note.id === parseInt(id)));
    }, [id, notes]);

    let onNameChange = (e) => {
        setTextAreaHeight(e, '59px');
        setNote({
            ...note,
            name: e.target.value,
        });
    };

    let onDescriptionChange = (e) => {
        let foundDescriptionTags = findDescriptionHashtags(e.target.value);

        setTextAreaHeight(e, '100px');
        setNote({
            ...note,
            description: e.target.value,
            descriptionTag: foundDescriptionTags,
        });
    };

    const saveNote = () => {
        editNote(note);
    };
    return (
        <>
            <div className={s.content}>
                <textarea
                    type="text"
                    className={s.noteName}
                    maxLength="50"
                    required
                    onChange={onNameChange}
                    value={note.name}
                >
                    {note.name}
                </textarea>
                <textarea
                    type="text"
                    className={s.noteDescription}
                    maxLength="500"
                    value={note.description}
                    onChange={onDescriptionChange}
                >
                    {note.description}
                </textarea>
                {/* <div
                    style={{
                        height: '100px',
                        marginBottom: '15px',
                        minHeight: '6em',
                        padding: '15px',
                        cursor: 'text',
                        backgroundColor: '#fff',
                        borderRadius: '5px',
                        fontSize: '16px',
                    }}
                >
                    <Editor
                        ref={editor}
                        editorState={editorState}
                        onChange={setEditorState}
                        blockStyleFn={hashtagMonospace}
                    />
                </div> */}
                <hr className={s.hr} />

                <div className={s.noteTagWrapper}>
                    <h2 className={s.tagsTitle}>Tags in the description:</h2>
                    <div className={s.noteTag}>
                        <h3 className={s.tag}>{note.descriptionTag}</h3>
                    </div>
                </div>
            </div>
            <div className={s.popupButtons}>
                <button className={s.saveNote} onClick={saveNote}>
                    Save
                </button>
                <button className={s.cancelAdd} onClick={close}>
                    Cancel
                </button>
            </div>
        </>
    );
}
