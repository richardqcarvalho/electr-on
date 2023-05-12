const log = require('../utils/log')
const { spawn } = require('child_process')
const fs = require('fs')
const getRunner = require('./runner')
const execPromise = (command, args) =>
  new Promise(resolve =>
    spawn(command, args, { shell: process.env.SHELL, stdio: 'inherit' }).on(
      'close',
      resolve,
    ),
  )

const runner = getRunner()

const update = (version, type = 'patch') => {
  const index = {
    major: 0,
    minor: 1,
    patch: 2,
    beta: 2,
  }

  const parts = version.match(/\d+/g).map((part, i) => {
    if (i == index[type]) return parseInt(part) + 1

    if (i < index[type]) return parseInt(part)

    return 0
  })

  const posfix = {
    beta: '-beta',
  }

  return parts.join('.').concat(posfix[type] || '')
}

const rewrite = type =>
  new Promise(resolve => {
    fs.readFile('./package.json', (err, data) => {
      if (err) {
        resolve()
      }
      const packageObject = JSON.parse(data)
      log(
        runner.includes('yarn')
          ? '<grey>$ node scripts/build/rewrite</grey>'
          : `> ${packageObject.name}@${packageObject.version}\n> node scripts/build/rewrite\n`,
        `- <blue>updating as:</blue> new ${type} version`,
        `- <blue>from:</blue> ${packageObject.version}`,
      )
      const newVersion = update(packageObject.version, type)
      log(`- <blue>to:</blue> ${newVersion}`)
      const packageString = JSON.stringify(
        {
          ...packageObject,
          version: newVersion,
        },
        null,
        '\t',
      )
      log('- rewriting package.json')
      fs.writeFile('./package.json', packageString, async () => {
        log('- done, <green>version updated</green>')
        resolve()
      })
    })
  })

const builder = type => {
  const command = {
    default: `${runner} build:electron`,
    beta: `${runner} build:electron:beta`,
  }

  return command[type] || command.default
}

const initiate = async () => {
  const type = process.argv[2] || 'patch'
  await execPromise(`${runner} build:next`)
  await rewrite(type)
  await execPromise(`${runner} format:package`)
  await execPromise(builder(type))
}

initiate()
