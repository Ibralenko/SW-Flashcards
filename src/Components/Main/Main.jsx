import style from "./Main.module.scss";
import Button from "../Button/Button";
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
        <Button text="Приступить!" ></Button>
        <img
          className={style.image}
          src="/src/assets/images/online-learning.png"
          alt=""
        />
      </div>
    </div>
  );
}
