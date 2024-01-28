import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { UserForm } from "../../components"
import { getData } from "../../utils"

export default function EditUserPage () {
  const { id } = useParams()
  const [userData, setUserData] = useState()

  useEffect(() => {
    getData(setUserData, id)
  }, [id])

  return (
    <section>
      <div>
        <UserForm data={userData} />
      </div>
    </section>
  )
}
