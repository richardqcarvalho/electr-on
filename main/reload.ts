import { spawn } from 'child_process'
import { watch } from 'chokidar'
import { app } from 'electron'
import { getPlatformParams } from './utils'

export default (glob: string | string[]) => {
  watch(glob, { ignored: `${app.getAppPath()}/reload.js` })
    .on('ready', () => console.log('watching files'))
    .on('change', path => {
      const filePaths = path.split(getPlatformParams[3])
      const file = filePaths[filePaths.length - 1]
      console.log(`file reloaded: ${file}`)
      const child = spawn('yarn', ['dev:electron'], {
        // detached: true,
        // stdio: ['inherit', 'inherit', 'ipc'],
        stdio: 'inherit',
        shell: process.env.SHELL,
      })
      child.unref()
      app.quit()
    })
}
