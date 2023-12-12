import style from './Table.module.scss';

export default function(props) {
  const {english, transcription, russian} = props;
  return (
    <div>
      <table border="0">
        <tr><td className={style.td}>{english}</td><td className={style.td}>{transcription}</td><td className={style.td}>{russian}</td><td className={style.td } ><button className={style.btn}><img className={style.ico} src='/src/assets/images/edit-ico.png' alt="редактировать" /></button><button  className={style.btn}><img className={style.ico} src='/src/assets/images/delete-ico.png' alt="удалить" /></button></td></tr>
        </table>
    </div>
  )
}