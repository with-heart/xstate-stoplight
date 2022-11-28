import {useMachine} from '@xstate/react'
import {createMachine} from 'xstate'

const stoplightMachine = createMachine(
  {
    id: 'stoplight',
    initial: 'red',
    states: {
      red: {
        after: {
          red: 'green',
        },
      },
      yellow: {
        after: {
          yellow: 'red',
        },
      },
      green: {
        after: {
          green: 'yellow',
        },
      },
    },
  },
  {
    delays: {
      red: 3_000,
      yellow: 1_000,
      green: 4_000,
    },
  },
)

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
