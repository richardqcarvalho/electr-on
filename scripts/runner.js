const getRunner = () => {
  const folders = process.env.npm_execpath.split('\\')
  const packageManager = folders.pop()
  const runner = {
    'npm-cli.js': 'npm run',
    'yarn.js': 'yarn run',
  }

  return runner[packageManager]
}

module.exports = getRunner
