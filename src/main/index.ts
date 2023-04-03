import { app, BrowserWindow, Menu, Tray } from 'electron'
import { resolve } from 'path'
import reload from './reload'
import { dirPath, getPlatformParams, getWindowConfig } from './utils'

app.whenReady().then(() => {
	reload(resolve(dirPath, 'watch'))

	const [ext, traySize, showOpenOpt] = getPlatformParams
	const iconPath = (number: number) =>
		resolve(dirPath, 'src', 'assets', `icon${number}.${ext}`)
	const windowConfig = getWindowConfig(1000, 500)
	const window = new BrowserWindow({
		icon: iconPath(64),
		...windowConfig,
	})

	const tray = new Tray(iconPath(traySize))
	const menuTemplate = [
		{
			label: 'Close',
			click: () => app.quit(),
		},
	]
	if (showOpenOpt)
		menuTemplate.splice(0, 0, { label: 'Open', click: () => window.show() })
	tray.setContextMenu(Menu.buildFromTemplate(menuTemplate))

	window.loadURL('http://localhost:5173').then(() => {
		window.show()
	})
})
