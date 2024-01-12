//сделать таблицу общим компонентом и получать данные из локалки по сохраненным словам
import { useEffect } from "react";
import data from '../data.json'

export default function LearnedCard() {

  const dataLocal = JSON.parse(localStorage.getItem("learned"));

  function checkLocal() {
    if (dataLocal == null) {
      return (
      localStorage.setItem("learnded", JSON.stringify(data))
      );
    } else return dataLocal;
  }

  useEffect(() => {
    console.log("render");
    checkLocal()
  });

  return <div>
  {dataLocal.map((item, index) => (
          <Table
            english={item.english}
            transcription={item.transcription}
            russian={item.russian}
            key={index}
          ></Table>
        ))}
  </div>;
}
