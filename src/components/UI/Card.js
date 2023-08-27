import styles from './Card.module.css'

const Card = (props) => {
  let { className = '' } = props
  className += ` ${styles.card}`

  return <div className={className}>{props.children}</div>
}

export default Card
