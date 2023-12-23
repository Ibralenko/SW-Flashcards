import style from './Main.module.scss'
import Button from '../Button/Button'
import Cards from '../../Pages/CardsPage/Cards'
import TablePage from '../../Pages/Table/TablePage'

export default function Main() {
  return (
    <div>
      <div className={style.container}>
        <h4 className={style.title}>Добро пожаловать!<br />Давай начнем изучать новые слова!</h4>
      <Button text="Приступить!"/>
      <img className={style.image} src="/src/assets/images/online-learning.png" alt="" />
      </div>
     
      </div>
  )
}
