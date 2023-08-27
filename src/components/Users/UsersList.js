import Card from '../UI/Card'
import User from './User'
import styles from './UsersList.module.css'

const UsersList = (props) => {
  const { users } = props
  const usersCount = users.length
  const renderUsers = () => {
    if (usersCount > 0) {
      return (
        <ul>
          {users.map(({ name, age, _id }) => (
            <User key={_id} name={name} age={age} />
          ))}
        </ul>
      )
    }
  }

  return <Card className={styles.users}>{renderUsers()}</Card>
}

export default UsersList
