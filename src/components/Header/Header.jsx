import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../components';
import { assets } from '../../assets/index'
import styles from './Header.module.scss'

export default function Header () {
  const location = useLocation()

  return (
    <nav className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles['header__logo-container']}>
          <assets.HomeSVG width={20} height={20} />
          <Link to="/">Friend list Manager</Link>
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
              <Button onClick={() => { }}>Create new contact</Button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
