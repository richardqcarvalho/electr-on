import { watch } from 'chokidar'

export default (glob: string | string[]) => {
	watch(glob)
		.on('ready', () => console.log('watching files'))
		.on('change', path => {
			const filePaths = path.split('\\')
			const file = filePaths[filePaths.length - 1]
			console.log(`file reloaded: ${file}`)
		})
}
