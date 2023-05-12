const { concurrently } = require('concurrently')
const getRunner = require('./runner')

const initiate = () => {
  const runner = getRunner()
  const { result } = concurrently(
    [
      { command: `${runner} dev:typescript`, name: 'ts' },
      { command: `${runner} dev:next`, name: 'next' },
      { command: `${runner} dev:electron`, name: 'electron' },
    ],
    {
      killOthers: 'failure',
    },
  )
  result.then(
    success => console.log({ success }),
    failure => console.log({ failure }),
  )
}

initiate()
