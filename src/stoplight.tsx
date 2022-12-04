import styles from './stoplight.module.scss'

export const Stoplight = () => {
  return (
    <div>
      <div className={styles.aspect} />
      <div className={styles.aspect} />
      <div className={styles.aspect} />
    </div>
  )
}
