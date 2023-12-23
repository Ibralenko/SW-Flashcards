import style from './Card.module.scss'
import React, { useState } from 'react'

export default function Card({item}) {
const [translate, setTranslate] = useState(false)

const showTranslate = () => {
  setTranslate(!translate)
}

  return (
    <>
    <div className={style.card}>
      <button className={style.left_array}></button>
      <h3 className={style.word}>{item.english}</h3>
      <h3 className={style.transcription}>{item.transcription}</h3>
      <p className={translate? `${style.word}`: `${style.translate_none}`}>{item.russian}</p>
      <button className={style.button} onClick={showTranslate}>{translate? 'Скрыть перевод' : 'Показать перевод'}</button>
      <button className={style.right_array}></button>
    </div>
    </>
  )

}
