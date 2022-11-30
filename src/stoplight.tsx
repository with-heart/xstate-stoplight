import {useMachine} from '@xstate/react'
import {createMachine} from 'xstate'
import styles from './stoplight.module.scss'

const stoplightMachine = createMachine({
  id: 'stoplight',
  initial: 'red',
  states: {
    red: {
      after: {
        1000: 'green',
      },
    },
    green: {
      after: {
        1000: 'yellow',
      },
    },
    yellow: {
      after: {
        1000: 'red',
      },
    },
  },
  tsTypes: {} as import('./stoplight.typegen').Typegen0,
})

export const Stoplight = () => {
  const [state] = useMachine(stoplightMachine)

  return (
    <div className={styles.stoplight}>
      <div
        className={styles.light}
        data-color="red"
        data-active={state.matches('red')}
      />
      <div
        className={styles.light}
        data-color="yellow"
        data-active={state.matches('yellow')}
      />
      <div
        className={styles.light}
        data-color="green"
        data-active={state.matches('green')}
      />
    </div>
  )
}
