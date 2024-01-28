import { Link, useLocation } from 'react-router-dom'
import { assets } from '../../assets'
import styles from './Header.module.scss'

export default function Header () {
  const location = useLocation()

  return (
    <nav className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles['header__logo-container']}>
          <assets.HomeSVG width={20} height={20} />
          <Link to="/" title='Back to welcome page'>Friend list Manager</Link>
        </div>
        <ul className={styles.header__list}>
          <li className="nav-item">
            <Link to="/contacts/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts/list">Contacts</Link>
          </li>
          {location.pathname === '/contacts/list' && (
            <li>
              <Link to="/contacts/create">Create contact</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
