const log = (...args) => {
  const logColors = {
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    pink: 35,
    cyan: 36,
    grey: 90,
  }

  args.forEach(arg => {
    if (typeof arg != 'string') {
      console.log(arg)
      return
    }

    const newMessage = arg.replaceAll(/<(.*?)>/g, (_, color) =>
      color.startsWith('/') ? '\x1b[0m' : `\x1b[${logColors[color] || 0}m`,
    )
    console.log(newMessage)
  })

  return
}

module.exports = log
