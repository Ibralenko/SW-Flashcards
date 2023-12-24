import style from "./Card.module.scss";
import React, { useRef, useState } from "react";
import data from "../data.json";

export default function Card() {
  const [translate, setTranslate] = useState(false);

  const showTranslate = () => {
    setTranslate(!translate);
  };

  // const [index, setIndex] = useState(0);

  // const [count, setCount] = useState(data[index]);

  const slider = useRef(null);
  let position = 0;
  const [items, setItems] = useState(data);

  const nextHandler = () => {
    // if (data[index] == undefined) {
    //   return alert("error");
    // } else setIndex(index + 1);
    // setCount(data[index]);
    position -= 290;
    console.log(slider.current);
    slider.current.childNodes.forEach((elem) => {
      elem.style = `transform: translateX(${position}px)`;
    });
  };

  const prevHandler = () => {
    // if (index < 0) {
    //   return alert("error");
    // } else setIndex(index - 1);
    // setCount(data[index]);
    console.log(slider);
    position += 290;
    slider.current.childNodes.forEach((elem) => {
      elem.style = `transform: translateX(${position}px)`;
    });
  };

  return (
    <div className={`${style.slider}`}>
      <div className={style.slider__track} ref={slider}>
        {data.map((item, index) => (
          <div className={style.card} key={index} ref={slider}>
            <h3 className={style.word}>{item.english}</h3>
            <h3 className={style.transcription}>{item.transcription}</h3>
            <p
              className={
                translate ? `${style.word}` : `${style.translate_none}`
              }
            >
              {item.russian}
            </p>
            <button className={style.button} onClick={showTranslate}>
              {translate ? "Скрыть перевод" : "Показать перевод"}
            </button>{" "}
          </div>
        ))}
      </div>
      <button onClick={prevHandler} className={style.left_array}>
        left
      </button>
      <button onClick={nextHandler} className={style.right_array}>
        right
      </button>
    </div>
  );
}
