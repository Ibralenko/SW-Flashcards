import data from '../../Components/data.json'
import Card from '../../Components/Card/Card'
import Button from '../../Components/Button/Button'

export default function Cards() {
  return (
    <div>
      <Button text='предыдущая'/>
      {data.map((item, index)=> <Card item={item} key={index}/>)}
      <Button text='следующая'/>
    </div>
  )
}
