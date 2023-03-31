import { app, screen } from 'electron'
import { resolve } from 'path'

export const isDev = !app.isPackaged

export const getBounds = (
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
		  }
		: {
				x:
					screen.getPrimaryDisplay().workArea.width -
					(screen.getPrimaryDisplay().workArea.width + windowWidth) / 2,
				y:
					screen.getPrimaryDisplay().workArea.height -
					(screen.getPrimaryDisplay().workArea.height + windowHeight) / 2,
		  }
}

export const __dirname = resolve(app.getAppPath(), '..')
