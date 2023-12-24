import style from "./Main.module.scss";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <div className={style.container}>
        <h4 className={style.title}>
          Добро пожаловать!
          <br />
          Давай начнем изучать новые слова!
        </h4>
        <button className={style.btn}><Link className={style.link} to="game">Приступить</Link></button>
        <img
          className={style.image}
          src="/src/assets/images/online-learning.png"
          alt=""
        />
      </div>
    </div>
  );
}
