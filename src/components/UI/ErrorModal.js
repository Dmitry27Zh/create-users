import React from 'react'
import ReactDom from 'react-dom'
import styles from './Modal.module.css'
import Card from './Card'
import Button from './Button'

const Backdrop = (props) => {
  const { onClose } = props

  return <div className={styles.backdrop} onClick={onClose}></div>
}

const Modal = (props) => {
  const { title, description, onClose } = props

  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{description}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onClose}>Close</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = (props) => {
  const { onClose, ...rest } = props

  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop onClose={onClose} />, document.getElementById('backdrop'))}
      {ReactDom.createPortal(<Modal onClose={onClose} {...rest} />, document.getElementById('modal'))}
    </React.Fragment>
  )
}

export default ErrorModal
