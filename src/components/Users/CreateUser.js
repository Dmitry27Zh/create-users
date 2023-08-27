import Card from '../UI/Card'
import Button from '../UI/Button'
import styles from './CreateUser.module.css'
import { useState } from 'react'

const CreateUser = (props) => {
  const { onUserCreate } = props
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const submitHandler = (event) => {
    event.preventDefault()
    const user = { name, age }
    onUserCreate(user)
  }
  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setAge(event.target.value)
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={nameChangeHandler} value={name} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" min="1" onChange={ageChangeHandler} value={age} />
        </div>
        <Button type="submit">Create</Button>
      </form>
    </Card>
  )
}

export default CreateUser
