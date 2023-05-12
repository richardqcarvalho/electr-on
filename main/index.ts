import { app, BrowserWindow, Menu, Tray } from 'electron'
import { resolve } from 'path'
import { dirPath, getPlatformParams, getWindowConfig } from './utils'

app.whenReady().then(() => {
  const [ext, traySize, showOpenOpt] = getPlatformParams
  const iconPath = (number: number) =>
    resolve(dirPath, 'assets', `icon${number}.${ext}`)
  const windowConfig = getWindowConfig(500, 500)
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

  window
    .loadURL(
      app.isPackaged ? 'file://./out/index.html' : 'http://localhost:3000',
    )
    .then(() => {
      window.show()
    })
})
