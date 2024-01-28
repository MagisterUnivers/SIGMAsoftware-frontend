import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Button, FormGroup } from "../../../components"
import { CreateData, UpdateData } from "../../../api"
import styles from './UserForm.module.scss'

export function UserForm ({ data }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notes: ''
  })

  function handleChange (e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  async function handleSubmit (e) {
    e.preventDefault()
    if (!data) {
      await CreateData(formData)
      window.alert('Data has been created!');
      navigate(`/contacts/list`);
    } else {
      await UpdateData(data.id, formData)
      window.alert('Data has been updated!');
      navigate(`/contacts/list`);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles['create-user']}>
      <FormGroup
        template='text'
        type='text'
        nameTitle='Name'
        name='name'
        value={formData.name}
        isRequired
        placeholder={data ? data.name : 'John Doe'}
        onChange={handleChange}
      />
      <FormGroup
        template='email'
        type='email'
        nameTitle='Email'
        name='email'
        value={formData.email}
        isRequired
        placeholder={data ? data.email : 'example@gmail.com'}
        onChange={handleChange}
      />
      <FormGroup
        template='textarea'
        nameTitle='Notes'
        name='notes'
        value={formData.notes}
        isRequired
        placeholder={data ? data.notes : 'Write here...'}
        onChange={handleChange}
      />
      <Button
        type='submit'
        className={styles['create-user__button']}
      >
        {data ? 'Edit user' : 'Create user'}
      </Button>
    </form>
  )
} 
