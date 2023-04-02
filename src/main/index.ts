import { app, BrowserWindow, Menu, Tray } from 'electron'
import { resolve } from 'path'
import reload from './reload'
import { dirPath, getBounds } from './utils'

app.whenReady().then(() => {
	reload(resolve(dirPath, 'watch'))

	const windowWidth = 1000
	const windowHeight = 500
	const bounds = getBounds(windowWidth, windowHeight)
	const iconPath = (number: number) =>
		resolve(dirPath, 'src', 'assets', `icon${number}.ico`)

	const window = new BrowserWindow({
		width: windowWidth,
		height: windowHeight,
		icon: iconPath(64),
	})
	window.setBounds(bounds)

	const tray = new Tray(iconPath(16))
	const contextMenu = Menu.buildFromTemplate([
		{
			label: 'Close',
			click: () => app.quit(),
		},
	])
	tray.setContextMenu(contextMenu)

	window.loadURL('http://localhost:5173').then(() => {
		window.show()
	})
})
