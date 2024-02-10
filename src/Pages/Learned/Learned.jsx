import LearnedCard from "../../Components/LearndeCard/LearnedCard"
import style from './Learned.module.scss'

export default function Learned()  {
  return (
<>
<h1 className={style.title}>Уже знаю: </h1>
<LearnedCard/>
</>
  )
}
