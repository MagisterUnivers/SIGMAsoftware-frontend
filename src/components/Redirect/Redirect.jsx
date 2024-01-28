import { Link } from 'react-router-dom'
import styles from './Redirect.module.scss'

export default function Redirect () {
  return (
    <section className={styles.redirect}>
      <div className={styles.redirect__wrapper}>
        <Link to="/contacts/home" className={styles['redirect__wrapper-link']}>
          Go to Home
        </Link>
        <Link to="/contacts/list" className={styles['redirect__wrapper-link']}>
          Go to Tasks
        </Link>
      </div>
    </section>
  )
}
