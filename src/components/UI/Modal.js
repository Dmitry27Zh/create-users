import styles from './Modal.module.css'
import Card from './Card'
import Button from './Button'

const Modal = (props) => {
  const { title, description } = props

  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{description}</p>
        </div>
        <footer className={styles.actions}>
          <Button>Close</Button>
        </footer>
      </Card>
    </div>
  )
}

export default Modal
