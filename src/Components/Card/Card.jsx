import style from "./Card.module.scss";
import React, { useState } from "react";
import data from "../data.json";

export default function Card() {
  const [translate, setTranslate] = useState(false);

  const showTranslate = () => {
    setTranslate(!translate);
  };

let i = 0;

const [count, setCount] = useState(data[i])

function on () {
  i = 2;
}


  return (
    <>
      <div className={style.card} key={count}>
        <button className={style.left_array}></button>
        <h3 className={style.word}>{count.english}</h3>
        <h3 className={style.transcription}>{count.transcription}</h3>
        <p className={translate ? `${style.word}` : `${style.translate_none}`}>
          {count.russian}
        </p>
        <button className={style.button} onClick={showTranslate}>
          {translate ? "Скрыть перевод" : "Показать перевод"}
        </button>
        <button onClick={on} className={style.right_array}></button>
      </div>
    </>
  );
}
