import { useEffect, useState } from 'react'
import { fetchAPI } from '../../api/fetch-api'
import styles from './ContactsPage.module.scss'

export default function ContactsPage () {
  const [usersData, setUsersData] = useState()

  useEffect(() => {
    setUsersData(fetchAPI('/', 'GET', null))
  }, [])

  return (
    <section>
      <div>
        <ul>
          <li>Hello</li>
        </ul>
      </div>
    </section>
  )
}
