# Electr-On

This project was made to provide a minimal structure with some tools that allows us to work on a project using Electron, React and Typescript.

![image](https://img.shields.io/badge/status-under%20development-yellow)

## Summary

- [Libs used](#libs-used)
- [Project goals](#project-goals)

## Libs used

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Electron](https://www.electronjs.org/)
- [Wait-on](https://github.com/jeffbski/wait-on)
- [Concurrently](https://github.com/open-cli-tools/concurrently)
- [Chokidar](https://github.com/paulmillr/chokidar)
- [Prettier](https://prettier.io/)

## Project goals

- [x] Configure Electron and Typescript to make them work together
- [x] Create a script that run the dev server with all the tools needed
- [x] Make a function that reloads the Electron instance when a change is noticed
- [x] Make a function that find the right monitor to show the windows when in development mode
- [ ] Configure the build process to use the best configure to do that in Electron and Next together
- [ ] Check the possibility to configure Typescript to emit less files inside watch directory during the development
- [ ] Provide output files for MacOS and Linux as well (development's been doing on Windows)
