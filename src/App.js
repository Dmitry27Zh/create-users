import { useState } from 'react'
import CreateUser from './components/Users/CreateUser'
import UsersList from './components/Users/UsersList'
import { createRandomGenerator } from './components/Utils/utils'

const getRandomId = createRandomGenerator(5)

const App = () => {
  const [users, setUsers] = useState([
    {
      name: 'John',
      age: 3,
      _id: getRandomId(),
    },
  ])

  return (
    <div>
      <CreateUser />
      <UsersList users={users} />
    </div>
  )
}

export default App
