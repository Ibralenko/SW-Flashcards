import style from './Logo.module.scss'

export default function Logo() {
  return (
    <div><a className={style.link} href='#'><img src='/public/logo.png' className={style.logo} alt="logo" />SW</a></div>
  )
}
