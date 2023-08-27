const User = (props) => {
  const { name, age } = props
  const getPair = (name, value) => `${name}: ${value}`
  const getString = (...pairs) => pairs.join(', ')

  return <li>{getString(getPair('Name', name), getPair('Age', age))}</li>
}

export default User
