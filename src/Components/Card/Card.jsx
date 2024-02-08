import style from "./Card.module.scss";
import React, { useEffect, useRef, useState } from "react";
import data from "../data.json";

export default function Card(props) {
  const [translate, setTranslate] = useState(false);
  const [index, setIndex] = useState(0);
  const [learnedWords, setLearnedWords] = useState(
    new Set(JSON.parse(localStorage.getItem("learnedWords") || "[]"))
  );
const btnRef =useRef()
  const btnNextRef = useRef();
  const btnPrevRef = useRef();

  useEffect(() => {
    setTranslate(false);
  }, [index]);

  const showTranslate = () => {
    setTranslate(!translate);
  };

  const dataLocal = JSON.parse(localStorage.getItem("words") || data);
  const [count, setCount] = useState(dataLocal[index]);

  function next() {
    if (index < dataLocal.length - 1) {
      setIndex(index + 1);
    }
  }

  function previous() {
    if (index < 0) {
      setIndex(index - 1);
    }
  }

  function saveLearnedWord() {
    const word = dataLocal[index];
    if (!learnedWords.has(word.english)) {
      const newLearnedWords = new Set(learnedWords.add(word.english));
      setLearnedWords(newLearnedWords);
      localStorage.setItem(
        "learnedWords",
        JSON.stringify([...newLearnedWords])
      );
      props.addToCart();
    }
  }
  useEffect(() => {
    setCount(dataLocal[index]);
  }, [index]);

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
          <button ref={btnRef} className={style.button} onClick={saveLearnedWord}>
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
