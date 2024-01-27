import { useEffect, useState } from 'react'
import { fetchAPI } from '../../api/fetch-api'
import styles from './ContactsPage.module.scss'

export default function ContactsPage () {
  const [usersData, setUsersData] = useState()

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
  }, [])

  useEffect(() => {
    console.log(usersData)
  }, [usersData])

  return (
    <section>
      <div>
        <ul>
          {usersData?.map((item => {
            return (
              <li>Hello</li>
            )
          }))}
        </ul>
      </div>
    </section>
  )
}
