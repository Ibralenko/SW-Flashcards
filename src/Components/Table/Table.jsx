import style from './Table.module.scss';
import { useState } from 'react';

export default function(props) {
  const {english, transcription, russian} = props;

  const [editCard, setEditCard] = useState(russian)

  const editTranslate = (event) => {
    setEditCard(event.target.value)
  }

  return (
    <div>
      <table border="0">
        <tr>
        <td className={style.td}>{english}</td>
        <td className={style.td}>{transcription}</td>
        <td className={style.td}><input type="text" value={editCard}/></td>
        <td className={style.td }>
          <button onClick={editTranslate} className={style.btn}>
            <img className={style.ico} src='/src/assets/images/edit-ico.png' alt="редактировать" />
          </button>
          <button className={editCard? `${style.btn_none}` : `${style.btn}`}>
            <img  className={style.ico} src='/src/assets/images/cancel-ico.png' alt="отменить редактирование" />
          </button>
          <button className={editCard? `${style.btn_none}` : `${style.btn}`}>
            <img className={style.ico} src='/src/assets/images/save-ico.png' alt="сохранить редактирование" />
          </button>
          <button  className={style.btn}>
            <img className={style.ico} src='/src/assets/images/delete-ico.png' alt="удалить" />
          </button>
        </td>
        </tr>
        </table>
    </div>
  )
}
