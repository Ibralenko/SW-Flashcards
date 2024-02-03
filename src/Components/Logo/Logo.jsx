import style from "./Logo.module.scss";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link className={style.link} to="/">
        <img src="/public/logo.png" className={style.logo} alt="logo" />
        SW
      </Link>
    </div>
  );
}
