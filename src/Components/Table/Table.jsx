import style from "./Table.module.scss";
import { useState } from "react";

export default function (props) {
  const { english, transcription, russian } = props;
  const [editCard, setEditCard] = useState(russian);

  const handleEditTranslate = (event) => {
    setEditCard(event.target.value);
  };

  function handleDeleteWord() {
    //setWords((prevWords) => prevWords.filter((word) => word.id !== id));
  }

  const handleSaveChanges = () => {
    console.log("save");
  };

  return (
    <div>
      <div border="0">
        <div className={style.table_list}>
          <div className={style.td}>{english}</div>
          <div className={style.td}>{transcription}</div>
          <div className={style.td}>
            <input className={style.input} type="text" value={editCard} />
          </div>
          <div className={style.td}>
            <button onClick={handleEditTranslate} className={style.btn}>
              <img
                className={style.ico}
                src="/src/assets/images/edit-ico.png"
                alt="редактировать"
              />
            </button>
            <div className={setEditCard ? `` : ``}>
              <button
                className={editCard ? `${style.btn_none}` : `${style.btn}`}
              >
                <img
                  className={style.ico}
                  src="/src/assets/images/cancel-ico.png"
                  alt="отменить редактирование"
                />
              </button>
              <button
                onClick={handleSaveChanges} className={editCard ? `${style.btn_none}` : `${style.btn}`}
              >
                <img
                  className={style.ico}
                  src="/src/assets/images/save-ico.png"
                  alt="сохранить редактирование"
                />
              </button>
            </div>
            <button onClick={handleDeleteWord} className={style.btn}>
              <img
                className={style.ico}
                src="/src/assets/images/delete-ico.png"
                alt="удалить"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
