import {useMachine} from '@xstate/react'
import {createMachine} from 'xstate'

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
    <div className="stoplight">
      <div
        className="light"
        data-color="red"
        data-active={state.matches('red')}
      />
      <div
        className="light"
        data-color="yellow"
        data-active={state.matches('yellow')}
      />
      <div
        className="light"
        data-color="green"
        data-active={state.matches('green')}
      />
    </div>
  )
}
