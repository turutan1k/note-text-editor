import React from 'react';
import s from './NoteItemTags.module.scss';
export default function NoteItemTags(props) {
    return <div className={s.descriptionTag}>{props.descriptionTag}</div>;
}
