import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppContext } from '../../App';
import AddNotePopup from '../Popups/AddNotePopup/AddNotePopup';
import DeleteNotePopup from '../Popups/DeleteNotePopup/DeleteNotePopup';
import EditNotePopup from '../Popups/EditNotePopup/EditNotePopup';
import ViewNotePopup from '../Popups/ViewNotePopup/ViewNotePopup';
import s from './Content.module.scss';
import NoteItem from './NoteItem/NoteItem';
import { v4 as uuidv4 } from 'uuid';

export default function Content() {
    const { notes, tags, getfilterNotes } = useContext(AppContext);

    let noteElements = getfilterNotes(notes, tags).map((note) => (
        <NoteItem
            name={note.name}
            description={note.description}
            descriptionTag={note.descriptionTag}
            key={uuidv4()}
            id={note.id}
        />
    ));
    return (
        <div className={s.contentWrapper}>
            <Routes>
                <Route path="/add/note/" element={<AddNotePopup />} />
                <Route path="/edit/note/:id" element={<EditNotePopup />} />
                <Route path="/view/note/:id" element={<ViewNotePopup />} />
                <Route path="/delete/note/:id" element={<DeleteNotePopup />} />
            </Routes>
            {noteElements}
        </div>
    );
}
