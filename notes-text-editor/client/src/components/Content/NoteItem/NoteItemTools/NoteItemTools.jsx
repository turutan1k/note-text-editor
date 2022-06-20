import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NoteItemTools.module.scss';
export default function NoteItemTools(props) {
    return (
        <div className={s.noteItemTools}>
            <NavLink to={`/view/note/${props.id}`}>
                <EyeOutlined
                    style={{
                        fontSize: '25px',
                        color: '#ff8753',
                        padding: '5px',
                    }}
                />
            </NavLink>
            <NavLink to={`/edit/note/${props.id}`}>
                <EditOutlined
                    style={{
                        fontSize: '25px',
                        color: '#ff8753',
                        padding: '5px',
                    }}
                />
            </NavLink>
            <NavLink to={`/delete/note/${props.id}`}>
                <DeleteOutlined
                    style={{
                        fontSize: '25px',
                        color: '#ff8753',
                        padding: '5px',
                    }}
                />
            </NavLink>
        </div>
    );
}
