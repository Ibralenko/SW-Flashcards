import Logo from '../Logo/Logo';
import style from './Header.module.scss';


export default function Header() {
  return (
    <div>
      <header className={style.header}>
      <Logo />
        <div className="container">
          <nav className={style.navigation}>
            <ul className={style.list}>
              <li className={style.item}><a className={style.link} href="/"> Главная </a></li>
              <li className={style.item}><a className={style.link} href="/">Карточки слов</a></li>
              <li className={style.item}><a className={style.link} href="/">Список слов</a></li>
              <li className={style.item}><a className={style.link} href="/">Изученное</a></li>
            </ul>
          </nav>
        </div>
      </header>
      </div>
  )
}
