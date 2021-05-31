# Opinionated MERN Template

This is a template repository used to quickly bootstrap MERN applications.

[![Linter](https://github.com/Ray-F/mern-template/actions/workflows/Linter.yml/badge.svg?branch=master)](https://github.com/Ray-F/mern-template/actions/workflows/Linter.yml)

### Default Technologies

#### Client Side
- React (using `create-react-app`)

#### Server Side
- Express (using `express-generator`)
- Babel ES6 modules (using `import / export` instead of `require()` and `module.exports`)
- Typescript support

### Compatability Notes:
- Inside `server/package.json`, the `clean` script will not work correctly on Windows machines. Refer to this [stack overflow link](https://stackoverflow.com/questions/97875/rm-rf-equivalent-for-windows) to find out the equivalent `Cmd.exe` or `PowerShell` command.

### Setup
- You should ideally be using yarn version `14.5.*` to make this repository work.
- Run `yarn install` in the root directory
- Run `yarn run init` in the root directory (installs dependencies for `client` and `server` directories)

### Run
- Run `yarn run dev` in the root directory to start both `client` and `server` environments
- Alternatively, run `yarn run start` (inside `client` directory) and `yarn run dev` (`server` directory) in separate terminals to have more fine grained control
