import {useMachine} from '@xstate/react'
import {createMachine} from 'xstate'
import {aspect} from './aspect.css'
import {stoplight} from './stoplight.css'

const stoplightMachine = createMachine({
  initial: 'red',
  states: {
    red: {
      after: {
        3000: 'green',
      },
    },
    amber: {
      after: {
        1000: 'red',
      },
    },
    green: {
      after: {
        3000: 'amber',
      },
    },
  },
})

export const Stoplight = () => {
  const [state] = useMachine(stoplightMachine)

  return (
    <div className={stoplight}>
      <div
        className={aspect}
        data-aspect="red"
        data-active={state.matches('red')}
      />
      <div
        className={aspect}
        data-aspect="amber"
        data-active={state.matches('amber')}
      />
      <div
        className={aspect}
        data-aspect="green"
        data-active={state.matches('green')}
      />
    </div>
  )
}
