import { json } from "react-router-dom";
import data from "../../Components/data.json";
import Table from "../../Components/Table/Table";
import style from "./TablePage.module.scss";
import { useState, useEffect, useRef } from "react";

export default function TablePage() {
  const [inputWord, setInputWord] = useState("");
  const [inputTransription, setInputTransription] = useState("");
  const [inputTranslate, setInputTranslate] = useState("");
  const btnRef = useRef();
  let inputWordRef = useRef();
  let inputTransriptionRef = useRef();
  let inputTranslateRef = useRef();

  const wordsLocal = localStorage.getItem("words");
  const d = JSON.parse(wordsLocal);

  function addNewWord() {
    if (
      inputWord.length !== 0 &&
      inputTransription.length !== 0 &&
      inputTranslate.length !== 0
    ) {
      const newWord = {
        english: inputWord,
        transcription: inputTransription,
        russian: inputTranslate,
      };
      data.push(newWord);
      clearInputs();
      blockBtn();
      localStorage.setItem("words", JSON.stringify(data));
    } else return false;
  }

  const blockBtn = () => {
    if (
      inputWordRef.current.value == "" ||
      inputTransriptionRef.current.value == "" ||
      inputTranslateRef.current.value == ""
    ) {
      btnRef.current.disabled = true;
    } else return (btnRef.current.disabled = false);
  };

  function clearInputs() {
    inputWordRef.current.value = "";
    inputTransriptionRef.current.value = "";
    inputTranslateRef.current.value = "";
  }

  useEffect(() => {
    console.log("render");
    blockBtn();
    // ??????????????????????????????????????????????????????????????
  });

  return (
    <>
      <div className={style.page}>
        <table>
          <tr>
            <th className={style.td}>Слово</th>
            <th className={style.td}>Транскрипция</th>
            <th className={style.td}>Перевод</th>
            <th className={style.td}></th>
          </tr>
        </table>
        <tr className={style.tr}>
          <input
            ref={inputWordRef}
            className={style.input}
            type="text"
            value={inputWord}
            onChange={(event) => setInputWord(event.target.value)}
          />
          <input
            ref={inputTransriptionRef}
            className={style.input}
            type="text"
            value={inputTransription}
            onChange={(event) => setInputTransription(event.target.value)}
          />
          <input
            ref={inputTranslateRef}
            className={style.input}
            type="text"
            value={inputTranslate}
            onChange={(event) => setInputTranslate(event.target.value)}
          />
          <button ref={btnRef} className={style.btn} onClick={addNewWord}>
            Добавить новое слово
          </button>
        </tr>
        {data.map((item, index) => (
          <Table
            english={item.english}
            transcription={item.transcription}
            russian={item.russian}
            key={index}
          ></Table>
        ))}
        {d.map((item, index) => (
          <Table
            english={item.english}
            transcription={item.transcription}
            russian={item.russian}
            key={index}
          ></Table>
        ))}
      </div>
    </>
  );
}
