import style from './Header.module.scss';


export default function Header() {
  return (
    <div>
      <header className={style.header}>
        <div className="container">
          <a className={style.link} href='#'><img src='/public/logo.png' className={style.logo} alt="logo" />SW</a>
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
