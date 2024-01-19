import data from "../../Components/data.json";
import Card from "../../Components/Card/Card";
import style from "./CardsPage.module.scss";

export default function CardsPage() {

  return (
    <div className={style.container}>
      <Card />
    </div>
  );
}
