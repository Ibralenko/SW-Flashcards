import data from '../data.json'

export default function Card({item}) {
  return (
    <div>
<h3>{item.english}</h3>
<h4>{item.transcription}</h4>
<p>{item.russian}</p>
    </div>
  )

}
