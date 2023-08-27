import styles from './Card.module.css'

const Card = (props) => {
  let { className = '', children } = props
  className += ` ${styles.card}`

  return <div className={className}>{children}</div>
}

export default Card
