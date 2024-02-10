import style from './LearnedCars.module.scss'

export default function LearnedCard() {
  const dataLocal = JSON.parse(localStorage.getItem("learnedWords"));
  return (
    <div className={style.container}>
      {dataLocal.map((item) => (
        <p className={style.words}>{item}</p>
      ))}
    </div>
  );
}
