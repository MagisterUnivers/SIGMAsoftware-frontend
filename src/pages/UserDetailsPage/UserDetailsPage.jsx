import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getData } from "../../utils"
import styles from './UserDetailsPage.module.scss'

export default function UserDetailsPage () {
  const { id } = useParams()
  const [userData, setUserdata] = useState()

  useEffect(() => {
    getData(setUserdata, id)
  }, [id])

  return (
    userData && (
      <section className={styles['user-details__section']}>
        <h1>User Details Page</h1>
        <div className={styles['user-details__wrapper']}>
          <h2>Name: {userData.name}</h2>
          <span>Email: <a href={`mailto:${userData.email}`}>{userData.email}</a></span>
          <p>Notes: {userData.notes}</p>
        </div>
      </section >
    )
  )
}
