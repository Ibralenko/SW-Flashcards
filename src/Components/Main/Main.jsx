import style from './Main.module.scss'
import Button from '../Button/Button'
import MainPageTable from '../../Pages/Table/PageTable/MainPageTable'


export default function Main() {
  return (
    <div>
      <div className={style.container}>
        <h4 className={style.title}>Добро пожаловать!<br />Давай начнем изучать новые слова!</h4>
      <Button text="Приступить!"/>
      <img className={style.image} src="/src/assets/images/online-learning.png" alt="" />
      </div>
      <MainPageTable />
      </div>
  )
}
