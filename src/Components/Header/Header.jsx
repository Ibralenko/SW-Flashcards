import Logo from "../Logo/Logo";
import style from "./Header.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className={style.header}>
        <Logo />
        <div className="container">
          <nav className={style.navigation}>
            <ul className={style.list}>
              <li className={style.item}>
                <Link className={style.link} to="/">
                  Главная{" "}
                </Link>
              </li>
              <li className={style.item}>
                <Link className={style.link} to="/game">
                  Карточки слов
                </Link>
              </li>
              <li className={style.item}>
                <Link className={style.link} to="/table">
                  Список слов
                </Link>
              </li>
              <li className={style.item}>
                <Link className={style.link} to="/learned">
                  Изученное
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Button text="Войти"></Button>
        </div>
      </header>
    </div>
  );
}
