import { spawn } from 'child_process'
import { watch } from 'chokidar'
import { app } from 'electron'
import { resolve } from 'path'
import { stderr, stdin, stdout } from 'process'
import { dirPath } from './utils'

export default (glob: string | string[]) => {
	const rtimeMs = new Date().getTime()
	watch(glob, {
		ignored: `${app.getAppPath()}/reload.js`,
	}).on('change', (path, { atimeMs }) => {
		const toCompare = (n: number) => Math.round(n / 10000)
		if (toCompare(rtimeMs) != toCompare(atimeMs)) {
			const filePaths = path.split('\\')
			const file = filePaths[filePaths.length - 1]
			console.log(`file reloaded: ${file}`)
			const executablePath = resolve(dirPath, 'node_modules', 'electron')
			const child = spawn(require(executablePath), [app.getAppPath()], {
				detached: true,
				stdio: [stdin, stdout, stderr],
			})
			child.unref()
			app.quit()
		}
	})
}
