import Logo from '../Logo/Logo';
import style from './Header.module.scss';


export default function Header() {
  return (
    <div>
      <header className={style.header}>
        <div className="container">
         <Logo />
          <nav className={style.navigation}>
            <ul className={style.list}>
              <li className={style.item}>Карточки слов</li>
              <li className={style.item}>Список слов</li>
              <li className={style.item}>Изученное</li>
            </ul>
          </nav>
        </div>
      </header>
      </div>
  )
}
