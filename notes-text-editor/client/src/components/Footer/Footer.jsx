import React from 'react';
import s from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={s.footerWrapper}>
            <h2 className={s.footerText}>
                Test task from the company Ivashin. Developed by Nikita Turuta
            </h2>
        </footer>
    );
}
