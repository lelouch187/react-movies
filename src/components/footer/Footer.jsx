import React from 'react'

import s from './footer.module.css'
import gitLogo from '../../icons/GitHub_Logo.png'

export default function Footer() {
  return (
    <footer className={s.footer}>
        <div className="container">
            <div className={s.footer__inner}>
                <span className={s.copy}>© {new Date().getFullYear()} Copyright Text</span>
                <a href="https://github.com/lelouch187" className={s.repo}>
                    <img src={gitLogo} alt="gitlink" className={s.git_link} />
                </a>
            </div>
        </div>
    </footer>
  )
}
