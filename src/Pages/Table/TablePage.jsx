import data from '../../Components/data.json'
import Table from '../../Components/Table/Table'
import style from './TablePage.module.scss'



export default function TablePage() {

  const addNewWord = () => {
     //собрать данные из интуптов, преобразовать их в JSON и добавить в data
    console.log('add');
  }

  return (
    <>
    <div className={style.page}>
      <table >
        <tr>
          <th className={style.td}>Слово</th>
          <th className={style.td}>Транскрипция</th><th className={style.td}>Перевод</th>
          <th className={style.td}></th>
        </tr>
      </table>
      <tr className={style.tr}><input className={style.input} type="text" />
        <input className={style.input} type="text" />
        <input className={style.input} type="text" />
        <button className={style.btn} onClick={addNewWord}>Добавить новое слово</button>
      </tr>
        {
        data.map((item)=>
          <Table english={item.english} transcription={item.transcription} russian={item.russian}></Table>
        )
          }
    </div>
    </>
  )
}
