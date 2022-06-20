import React, { useContext, useRef, useState } from 'react';
import FilterTag from './FilterTag/FilterTag';
import s from './Filter.module.scss';
import { AppContext } from '../../../App';
import { RightCircleOutlined } from '@ant-design/icons';

export default function Filter() {
    const { tags, addTag } = useContext(AppContext);
    const [tag, setTag] = useState('');
    let tagInput = useRef(null);
    const handleAddTag = () => {
        if (tag) addTag(tag.toLowerCase());
    };

    let tagElements = tags.map((tag) => (
        <FilterTag value={`${tag}`} key={tags.indexOf(tag)} />
    ));
    return (
        <>
            <div className={s.inputWrapper}>
                <h2>Filter:</h2>
                <input
                    ref={tagInput}
                    className={s.filterInput}
                    type="text"
                    placeholder="#"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                ></input>
                <button className={s.addFilterTag} onClick={handleAddTag}>
                    <RightCircleOutlined style={{ fontSize: '12px' }} />
                </button>
            </div>
            <div className={s.tagWrapper}>{tagElements}</div>
        </>
    );
}
