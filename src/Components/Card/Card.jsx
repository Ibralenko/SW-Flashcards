import style from "./Card.module.scss";
import React, { useState } from "react";
import data from "../data.json";

export default function Card() {
  const [translate, setTranslate] = useState(false);

  const showTranslate = () => {
    setTranslate(!translate);
  };


const [index, setIndex] = useState(0)

const [count, setCount] = useState(data[index])

function next () {
if (data[index] == undefined){
  return alert('error')
} else setIndex(index + 1)
setCount(data[index])
}

function previous () {
  if (index < 0){
    return alert('error')
  } else setIndex(index - 1)
setCount(data[index])
}

  return (
    <>
      <div className={style.card} key={count}>
        <button onClick={previous} className={style.left_array}></button>
        <h3 className={style.word}>{count.english}</h3>
        <h3 className={style.transcription}>{count.transcription}</h3>
        <p className={translate ? `${style.word}` : `${style.translate_none}`}>
          {count.russian}
        </p>
        <button className={style.button} onClick={showTranslate}>
          {translate ? "Скрыть перевод" : "Показать перевод"}
        </button>
        <button onClick={next} className={style.right_array}></button>
      </div>
    </>
  );
}
