import { spawn } from "child_process";
import { watch } from "chokidar";
import { app } from "electron";
import { resolve } from "path";

export default (glob: string | string[]) => {
  watch(glob).on("change", () => {
    const dirname = resolve(app.getAppPath(), "..");
    const executablePath = resolve(dirname, "node_modules", "electron");

    const child = spawn(require(executablePath), [app.getAppPath()], {
      detached: true,
      stdio: "inherit",
    });

    child.unref();

    app.quit();
  });
};
