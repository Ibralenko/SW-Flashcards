import style from "./Card.module.scss";
import React, { useRef, useState } from "react";
import data from "../data.json";

export default function Card(props) {
  const [translate, setTranslate] = useState(false);

  const btnNextRef = useRef();
  const btnPrevRef = useRef();

  const showTranslate = () => {
    setTranslate(!translate);
  };
  const wordsLocal = localStorage.getItem("words");
  const dataLocal = JSON.parse(wordsLocal);

  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(dataLocal[index]);

  function next() {
    if (dataLocal[index] == index[index.length - 1]) {
      return (btnNextRef.current.disabled = true);
    } else {
      setIndex(prev => prev  + 1);
      btnPrevRef.current.disabled = false;
    }
    setCount(dataLocal[index]);
  }

  function previous() {
    if (index <= 0) {
      return (btnPrevRef.current.disabled = true);
    } else {
      btnNextRef.current.disabled = false;
      setIndex(prev => prev - 1);
    }
    setCount(dataLocal[index]);
  }
  //когда доходит до списка в локалсторэдж, не получается вернуться назад, возможно, потому что нет индекса
  const list = [];
  //перезаписывается каждое слово в лист??? если находишься  на одной карточке, то можно несколько слов добавлять , если карточку меняешь, то сразу же перезапись происходит в хранилище
  function saveLearnedWord() {
    list.push(data[index]);
    localStorage.setItem("learnded", JSON.stringify(list));
    console.log(list);
  }

  return (
    <>
      <div className={style.card} key={count}>
        <button
          ref={btnPrevRef}
          onClick={previous}
          className={style.left_arrow}
        >
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
          <button className={style.button} onClick={props.addToCart}>
            Знаю слово
          </button>
        </div>
        <button ref={btnNextRef} onClick={next} className={style.right_arrow}>
          next
        </button>
      </div>
    </>
  );
}
