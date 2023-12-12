import data from '../../../Components/data.json'
import Table from '../Table'
import style from './MainPageTable.module.scss'



export default function MainPageTable() {
  return (
    <div className={style.page}>
      <table >
        <tr><th className={style.td}>Слово</th><th className={style.td}>Транскрипция</th><th className={style.td}>Перевод</th><th className={style.td}></th></tr>
        </table>
        <tr className={style.tr}><input className={style.input} type="text" /><input className={style.input} type="text" /><input className={style.input} type="text" /><button className={style.btn}>Add</button></tr>
        {
        data.map((item)=>
          <Table english={item.english} transcription={item.transcription} russian={item.russian}></Table>
        )
          }
      </div>
  )
}
