import React from 'react';
import s from './NoteItem.module.scss';

import NoteItemName from './NoteItemName/NoteItemName';
import NoteItemDescription from './NoteItemDescription/NoteItemDescription';
import NoteItemTools from './NoteItemTools/NoteItemTools';
import NoteItemTags from './NoteItemTags/NoteItemTags';

export default function NoteItem(props) {
    return (
        <div className={s.noteItemWrapper}>
            <NoteItemName name={props.name} />
            <NoteItemDescription description={props.description} />
            <NoteItemTags descriptionTag={props.descriptionTag} />
            <NoteItemTools id={props.id} />
        </div>
    );
}
