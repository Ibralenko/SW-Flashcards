import style from './Error.module.scss';

export default function Error() {
  return (
    <div className={style.error}>
      <h1 className={style.title}>WHOOPS!</h1>
        <h4 className={style.title}><img className={style.img} src='/src/assets/images/error-ico.png' alt="error" /> NOT FOUND</h4>
        <p className={style.text}>Looks like this page went on vacation</p>
    </div>
  )
}
