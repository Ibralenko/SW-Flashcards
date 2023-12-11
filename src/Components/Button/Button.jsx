import style from './Button.module.scss'

export default function Button(props) {
  const {text}= props
  return (
    <div>
      <button className={style.btn}>{text}</button>
    </div>
  )
}
