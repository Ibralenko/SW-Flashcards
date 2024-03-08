import data from "../../Components/data.json";
import Table from "../../Components/Table/Table";
import style from "./TablePage.module.scss";
import { useState, useEffect, useRef } from "react";

export default function TablePage() {
  const [inputWord, setInputWord] = useState("");
  const [inputTransription, setInputTransription] = useState("");
  const [inputTranslate, setInputTranslate] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  const btnRef = useRef();
  let inputWordRef = useRef();
  let inputTransriptionRef = useRef();
  let inputTranslateRef = useRef();

  function checkLocal() {
    if (dataLocal == null) {
      return localStorage.setItem("words", JSON.stringify(data));
    } else return dataLocal;
  }
  const dataLocal = JSON.parse(localStorage.getItem("words"));

  function addNewWord() {
    const newWord = {
      english: inputWord,
      transcription: inputTransription,
      russian: inputTranslate,
    };
    data.push(newWord);
    clearInputs();
    addDataToLocalStorage(newWord);
    blockBtn();
  }

  function addDataToLocalStorage(data) {
    let list = [];
    try {
      list = JSON.parse(localStorage.getItem("words"));
    } catch (e) {
      console.error(e);
    }
    list.push(data);
    localStorage.setItem("words", JSON.stringify(list));
  }

  const blockBtn = () => {
    if (
      inputWordRef.current.value == "" ||
      inputTransriptionRef.current.value == "" ||
      inputTranslateRef.current.value == ""
    ) {
      return setDisabled(true);
    } else {
      setDisabled(false);
      clearInputs();
    }
  };

  function clearInputs() {
    inputWordRef.current.value = "";
    inputTransriptionRef.current.value = "";
    inputTranslateRef.current.value = "";
  }

  useEffect(() => {
    console.log("render");
    blockBtn();
    checkLocal();
  });

  return (
    <>
      <div className={style.page}>
        <div className={style.table_title}>
          <div className={style.td}>Слово</div>
          <div className={style.td}>Транскрипция</div>
          <div className={style.td}>Перевод</div>
          <div className={style.td}></div>
        </div>
        <div className={style.table_addWords}>
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
          <button
            ref={btnRef}
            className={style.btn}
            onClick={addNewWord}
            disabled={isDisabled}
          >
            Добавить новое слово
          </button>
        </div>

        {data.map((item, index) => (
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
