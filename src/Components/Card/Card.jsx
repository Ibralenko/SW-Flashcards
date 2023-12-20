import style from './Card.module.scss'
import React, { useState } from 'react'

export default function Card({item}) {
const [translate, setTranslate] = useState(false)

const showTranslate = () => {
  setTranslate(!translate)
}

  return (
    <div className={style.card}>
      <h3 className={style.word}>{item.english}</h3>
      <h3 className={style.transcription}>{item.transcription}</h3>
      <p className={translate? `${style.word}`: `${style.translate_none}`}>{item.russian}</p>
      <button className={style.button} onClick={showTranslate}>{translate? 'Скрыть перевод' : 'Показать перевод'}</button>
    </div>
  )

}
