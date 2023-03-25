import { app, screen } from "electron";

export const getBounds = (windowWidth: number, windowHeight: number) => {
  const isDev = !app.isPackaged;

  const display = isDev
    ? screen.getAllDisplays()[0]
    : screen.getPrimaryDisplay();

  return isDev
    ? {
        x: display.workArea.x + (display.workArea.width - windowWidth) / 2,
        y: display.workArea.y + (display.workArea.height - windowHeight) / 2,
      }
    : {
        x: display.workArea.width - (display.workArea.width + windowWidth) / 2,
        y:
          display.workArea.height -
          (display.workArea.height + windowHeight) / 2,
      };
};
