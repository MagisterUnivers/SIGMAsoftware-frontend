import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { UserCard } from '../../components'
import { fetchAPI } from '../../api'
import styles from './ContactsPage.module.scss'

export default function ContactsPage () {
  const [usersData, setUsersData] = useState()
  const [isDeleted, setIsDeleted] = useState(false)

  function handleDelete () {
    setIsDeleted(!isDeleted)
  }

  useEffect(() => {
    async function fetchData () {
      const data = await fetchAPI({
        resource: '/',
        method: 'GET',
        fields: null
      });
      setUsersData(data)
    }

    fetchData()
  }, [isDeleted])

  return (
    <section>
      <div>
        <ul className={styles.contacts__list}>
          {usersData?.map((item => {
            return (
              <li key={item.id}>
                <Link to={`/contacts/${item.id}`} className={styles['contacts__label-link']}>
                  <UserCard data={item} isDeleted={handleDelete} deletedState={isDeleted} />
                </Link>
              </li>
            )
          }))}
        </ul>
      </div>
    </section>
  )
}
