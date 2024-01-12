import style from "./Card.module.scss";
import React, { useRef, useState } from "react";

export default function Card() {
  const [translate, setTranslate] = useState(false);

  const showTranslate = () => {
    setTranslate(!translate);
  };
  const wordsLocal = localStorage.getItem("words");
  const dataLocal = JSON.parse(wordsLocal);

  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(dataLocal[index]);

  function next() {
    if (dataLocal[index] == undefined) {
      return alert("error");
    } else setIndex(index + 1);
    setCount(dataLocal[index]);
  }
  //переделать на предыдущее зачение плюс или минус

  function previous() {
    if (index < 0) {
      return index[index.length - 1];
    } else setIndex(index - 1);
    setCount(dataLocal[index]);
  }


  function saveLearnedWord(){
    // const list = []
    // list.push()
    // localStorage.setItem("learnded", JSON.stringify(list))
  }
  return (
    <>
      <div className={style.card} key={count}>
        <button onClick={previous} className={style.left_arrow}>
          prev
        </button>
        <h3 className={style.word}>{count.english}</h3>
        <h3 className={style.transcription}>{count.transcription}</h3>
        <p className={translate ? `${style.word}` : `${style.translate_none}`}>
          {count.russian}
        </p>
        <div className={style.buttons}>
        <button className={style.button} onClick={showTranslate}>
          {translate ? "Скрыть перевод" : "Показать перевод"}
        </button>
        <button className={style.button}>Знаю слово</button>
        </div>
        <button onClick={next} className={style.right_arrow}>
          next
        </button>
      </div>
    </>
  );
}
