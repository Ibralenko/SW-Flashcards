import Logo from '../Logo/Logo'
import s from './Footer.module.scss'

export default function Footer() {
  return (
    <div  className={s.wrapper}>
      <footer className={s.footer}>
        <div className={s.container}>
      <Logo />
      <p className={s.text}>Created by <a className={s.link} href='https://github.com/Ibralenko'>Julia Pavlenko</a></p>
      </div>
      </footer></div>
  )
}
