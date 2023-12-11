import style from './Main.module.scss'
import Button from '../Button/Button'

export default function Main() {
  return (
    <div>
      <div className={style.container}>
      <Button text="Приступить"/>
      <img className={style.image} src="/src/assets/images/online-learning.png" alt="" />
      </div>
      </div>
  )
}
