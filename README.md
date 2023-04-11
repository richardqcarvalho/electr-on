# Electr-On

This project was made to provide a minimal structure with some tools that allows us to work on a project using Electron, React and Typescript.

![image](https://img.shields.io/tokei/lines/github/richardqcarvalho/electr-on?style=for-the-badge)
![image](https://img.shields.io/badge/status-under%20development-yellow?style=for-the-badge)
![image](https://img.shields.io/github/last-commit/richardqcarvalho/electr-on?style=for-the-badge&logo=github&logoColor=white)

## Summary

- [Libs used](#libs-used)
- [Project goals](#project-goals)

## Libs used

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Typescript](https://typescriptlang.org)
- [Electron](https://electronjs.org)
- [Wait-on](https://github.com/jeffbski/wait-on)
- [Concurrently](https://github.com/open-cli-tools/concurrently)
- [Chokidar](https://github.com/paulmillr/chokidar)
- [Prettier](https://prettier.io)

## Project goals

- [x] Configure Electron and Typescript to make them work together
- [x] Create a script that run the dev server with all the tools needed
- [x] Make a function that find the right monitor to show the windows when in development mode
- [ ] Make a function that reloads the Electron instance when a change is noticed
- [ ] Create a way to choose in which monitor to show windows on
- [ ] Configure the build process to use the best configure to do that in Electron and Next together
- [ ] Check the possibility to configure Typescript to emit less files inside watch directory during the development
- [ ] Provide output files for MacOS and Linux as well (development's been doing on Windows)
- [ ] Configure better updates possible to app (silent update, ways to download it, etc)
