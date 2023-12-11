import Logo from '../Logo/Logo'
import s from './Footer.module.scss'

export default function Footer() {
  return (
    <div>
      <footer className={s.footer}>
        <div className={s.container}>
     <Logo />
     <p>created by Julia Pavlenko</p>
     </div>
      </footer></div>
  )
}
