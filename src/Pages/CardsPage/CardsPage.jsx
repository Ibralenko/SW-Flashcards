import Card from "../../Components/Card/Card";
import style from "./CardsPage.module.scss";
import { useState } from "react";

export default function CardsPage() {
  const [itemsInCart, setItemsInCart] = useState(0);

  const addToCart = () => {
    setItemsInCart(itemsInCart + 1);
  };
  return (
    <div className={style.container}>
      <p className={style.counter}>Вы выучили {itemsInCart} слов</p>
      <Card addToCart={addToCart} />
    </div>
  );
}
