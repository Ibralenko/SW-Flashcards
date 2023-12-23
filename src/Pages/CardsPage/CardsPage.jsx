import data from "../../Components/data.json";
import Card from "../../Components/Card/Card";
import style from "./CardsPage.module.scss";

export default function CardsPage() {
  // {data.map((item, index)=> <Card item={item} key={index}/>)}

  return (
    <div className={style.container}>
     <Card />
    </div>
  );
}
