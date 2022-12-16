import s from './header.module.css'
import cat from '../../icons/gitcat.svg'

export default function Header() {
  return (
    <div className={s.header}>
        <div className="container">
            <div className={s.header__inner}>
                <a href="/" className={s.logo}>babadzaki</a>
                <a href="https://github.com/lelouch187" className={s.repo}>
                    <img src={cat} alt="gitlink" className={s.git_link} />
                </a>
            </div>
        </div>
    </div>
  )
}
