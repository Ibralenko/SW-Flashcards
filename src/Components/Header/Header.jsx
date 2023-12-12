import Logo from '../Logo/Logo';
import style from './Header.module.scss';
import Button from '../Button/Button'

export default function Header() {
  return (
    <div>
      <header className={style.header}>
      <Logo />
        <div className="container">
          <nav className={style.navigation}>
            <ul className={style.list}>
              <li className={style.item}><a className={style.link} href="/">Главная </a></li>
              <li className={style.item}><a className={style.link} href="/">Карточки слов</a></li>
              <li className={style.item}><a className={style.link} href="table">Список слов</a></li>
              <li className={style.item}><a className={style.link} href="/">Изученное</a></li>
            </ul>
          </nav>
        </div>
        <div><Button text="Войти"></Button></div>
      </header>
      </div>
  )
}
