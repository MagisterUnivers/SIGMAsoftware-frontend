import { assets } from '../../../assets'
import { DeleteData } from '../../../api'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components'
import styles from './UserCard.module.scss'

export function UserCard ({ data, isDeleted }) {
  const navigate = useNavigate();
  function handleDeleteClick (event) {
    event.stopPropagation();
    event.preventDefault()
    DeleteData(data.id)
    isDeleted()
  }

  function handleEditClick (event) {
    event.stopPropagation();
    event.preventDefault()
    navigate(`/contacts/edit/${data.id}`);
  }

  return <div className={styles['user-card__wrapper']}>
    <div>
      <assets.HumanSVG width={20} height={20} />
      <h3>Name: {data.name}</h3>
    </div>
    <p>Email: {data.email}</p>
    <p>Notes: {data.notes}</p>
    <div className={[styles['user-card__service-wrapper']]}>
      <Button type='button' onClick={(event) => handleDeleteClick(event)}>
        <assets.DeleteSVG width={20} height={20} title='Delete user card' />
      </Button>
      <Button type='button' onClick={(event) => handleEditClick(event)}>
        <assets.EditSVG width={20} height={20} title='Edit user card' />
      </Button>
    </div>
  </div>
}
