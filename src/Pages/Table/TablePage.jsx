import data from "../../Components/data.json";
import Table from "../../Components/Table/Table";
import style from "./TablePage.module.scss";
import { useState, useEffect } from "react";

export default function TablePage() {
  // const [value, setValue] = useState(true);

  // const handleChangeTranslate = (event) => {
  //   const values = event.target.value
  //   setValue(values);
  //   inputs.push(values)
  //   console.log(values);
  // };

  // const inputs = [];

  const [inputWord, setInputWord] = useState("");
  const [inputTransription, setInputTransription] = useState("");
  const [inputTranslate, setInputTranslate] = useState("");

  function addNewWord() {
    const newWord = {
      english: inputWord,
      transcription: inputTransription,
      russian: inputTranslate,
    };

    data.push(newWord);
    console.log(data);
  }

  useEffect(() => {
    console.log("rerender");
  }, [data]);

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
            className={style.input}
            type="text"
            value={inputWord}
            onChange={(event) => setInputWord(event.target.value)}
          />
          <input
            className={style.input}
            type="text"
            value={inputTransription}
            onChange={(event) => setInputTransription(event.target.value)}
          />
          <input
            className={style.input}
            type="text"
            value={inputTranslate}
            onChange={(event) => setInputTranslate(event.target.value)}
          />
          <button className={style.btn} onClick={addNewWord}>
            Добавить новое слово
          </button>
        </tr>
        {data.map((item) => (
          <Table
            english={item.english}
            transcription={item.transcription}
            russian={item.russian}
          ></Table>
        ))}
      </div>
    </>
  );
}
