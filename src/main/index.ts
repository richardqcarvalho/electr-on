import { app, BrowserWindow, Menu, Tray } from "electron";
import { resolve } from "path";
import reload from "./reload";
import { getBounds } from "./utils";

const dirname = resolve(app.getAppPath(), "..");

app.whenReady().then(() => {
  reload(resolve(dirname, "watch"));

  const windowWidth = 1000;
  const windowHeight = 500;
  const bounds = getBounds(windowWidth, windowHeight);
  const iconPath = resolve(dirname, "src", "assets", "icon.ico");

  const window = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    icon: iconPath,
  });
  window.setBounds(bounds);

  const tray = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([
    { label: "Close", click: () => app.quit() },
  ]);
  tray.setContextMenu(contextMenu);

  window.loadURL("http://localhost:3000").then(() => {
    window.show();
  });
});
