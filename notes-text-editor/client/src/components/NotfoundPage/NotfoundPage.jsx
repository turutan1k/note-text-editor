import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NotfoundPage.module.scss';

const setActive = ({ isActive }) =>
    isActive ? `${s.notFoundLinkActive}` : `${s.notFoundLink}`;

export default function NotfoundPage() {
    return (
        <div className={s.notFoundWrapper}>
            <h1 className={s.notFoundText}>404 - Not found</h1>
            <NavLink to="/" className={setActive}>
                <RightOutlined style={{ fontSize: '14px', margin: '10px' }} />
                Go Home
                <LeftOutlined style={{ fontSize: '14px', margin: '10px' }} />
            </NavLink>
        </div>
    );
}
