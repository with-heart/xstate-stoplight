import styles from './stoplight.module.scss'

export const Stoplight = () => {
  return (
    <div>
      <div className={styles.aspect} data-aspect="red" />
      <div className={styles.aspect} data-aspect="amber" />
      <div className={styles.aspect} data-aspect="green" />
    </div>
  )
}
