import { app, screen } from 'electron'
import os from 'os'
import { resolve } from 'path'

export const isDev = !app.isPackaged

export const getWindowConfig = (
  windowWidth: number,
  windowHeight: number,
  monitor?: number,
) => {
  return isDev
    ? {
        x:
          screen.getAllDisplays()[monitor || 0].workArea.x +
          (screen.getAllDisplays()[monitor || 0].workArea.width - windowWidth) /
            2,
        y:
          screen.getAllDisplays()[monitor || 0].workArea.y +
          (screen.getAllDisplays()[monitor || 0].workArea.height -
            windowHeight) /
            2,
        width: windowWidth,
        height: windowHeight,
      }
    : {
        x:
          screen.getPrimaryDisplay().workArea.width -
          (screen.getPrimaryDisplay().workArea.width + windowWidth) / 2,
        y:
          screen.getPrimaryDisplay().workArea.height -
          (screen.getPrimaryDisplay().workArea.height + windowHeight) / 2,
        width: windowWidth,
        height: windowHeight,
      }
}

export const dirPath = resolve(app.getAppPath(), '..')

export const getPlatformParams: [string, number, boolean, string] =
  os.platform() == 'win32' ? ['ico', 16, false, '\\'] : ['png', 32, true, '/']
