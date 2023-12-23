import data from '../../Components/data.json'
import Card from '../../Components/Card/Card'

export default function Cards() {


  return (
    <div>
      {data.map((item, index)=> <Card item={item} key={index}/>)}
    </div>
  )
}
