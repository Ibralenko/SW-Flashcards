import Logo from '../Logo/Logo'
import s from './Footer.module.scss'

export default function Footer() {
  return (
    <div>
      <footer className={s.footer}>
     <Logo />
      </footer></div>
  )
}
