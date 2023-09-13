import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import styles from './CreateUser.module.css'
import { useState } from 'react'

const CreateUser = (props) => {
  const { onUserCreate } = props
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [modal, setModal] = useState(null)
  const submitHandler = (event) => {
    event.preventDefault()

    if (name.trim().length === 0 || age.trim().length === 0) {
      setModal({
        title: 'Incorrect input',
        description: "Inputs can't be empty",
      })
    } else if (Number(age) < 1) {
      setModal({
        title: 'Incorrect age',
        description: 'Age must be more than 0',
      })
    } else {
      const user = { name, age }
      onUserCreate(user)
      setName('')
      setAge('')
    }
  }
  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setAge(event.target.value)
  }
  const closeModalHandler = () => {
    setModal(null)
  }
  const renderModal = () => {
    if (modal) {
      const { title, description } = modal

      return <ErrorModal title={title} description={description} onClose={closeModalHandler} />
    }
  }

  return (
    <Card className={styles.input}>
      {renderModal()}
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={nameChangeHandler} value={name} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" onChange={ageChangeHandler} value={age} />
        </div>
        <Button type="submit">Create</Button>
      </form>
    </Card>
  )
}

export default CreateUser
