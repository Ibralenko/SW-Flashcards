import data from '../../Components/data.json'
import Card from '../../Components/Card/Card'
import style from './Cards.module.scss'

export default function Cards() {


  return (
    <div className={style.container}>
      {data.map((item, index)=> <Card item={item} key={index}/>)}
    </div>
  )
}
