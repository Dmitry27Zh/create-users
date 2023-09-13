import React, { useState } from 'react'
import CreateUser from './components/Users/CreateUser'
import UsersList from './components/Users/UsersList'
import { createRandomGenerator } from './components/Utils/utils'

const getRandomId = createRandomGenerator(5)
const createUser = (name, age) => {
  return {
    name,
    age,
    _id: getRandomId(),
  }
}

const App = () => {
  const [users, setUsers] = useState([createUser('John', 4)])
  const addUser = ({ name, age }) => {
    const user = createUser(name, age)
    setUsers((prevState) => [user, ...prevState])
  }

  return (
    <React.Fragment>
      <CreateUser onUserCreate={addUser} />
      <UsersList users={users} />
    </React.Fragment>
  )
}

export default App
