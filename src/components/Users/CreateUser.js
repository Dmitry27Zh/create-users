import Card from '../UI/Card'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import styles from './CreateUser.module.css'
import { useState } from 'react'

const CreateUser = (props) => {
  const { onUserCreate } = props
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [modalDescription, setModalDescription] = useState('')
  const [modalShown, setModalShown] = useState(false)
  const submitHandler = (event) => {
    event.preventDefault()

    if (!name || !age) {
      setModalTitle('Incorrect input')
      setModalDescription("Inputs can't be empty")
      setModalShown(true)
    } else if (Number(age) < 1) {
      setModalTitle('Incorrect age')
      setModalDescription('Age must be more than 0')
      setModalShown(true)
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
    setModalShown(false)
  }
  const renderModal = () => {
    if (modalShown) {
      return <Modal title={modalTitle} description={modalDescription} onClose={closeModalHandler} />
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
