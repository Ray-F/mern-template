# Opinionated MERN Template

This is a template repository used to quickly bootstrap MERN applications.

[![Linter](https://github.com/Ray-F/mern-template/actions/workflows/Linter.yml/badge.svg?branch=master)](https://github.com/Ray-F/mern-template/actions/workflows/Linter.yml)

### Default Technologies

#### Client Side
- React (bootstrapped from `create-react-app`)
- Styled Components
- React Router
- Typescript support (generally not recommend for client)

#### Server Side
- Express (bootstrapped from `express-generator`)
- Babel ES6 modules (using `import / export` instead of `require()` and `module.exports`)
- Typescript support

### Compatability Notes:
- n/a

### Setup
- You should ideally be using yarn version `14.5.*` to make this repository work.
- Run `yarn install` in the root directory
- Run `yarn run init` in the root directory (installs dependencies for `client` and `server` directories)

### Run
- Run `yarn run dev` in the root directory to start both `client` and `server` environments
- Alternatively, run `yarn run start` (inside `client` directory) and `yarn run dev` (`server` directory) in separate terminals to have more fine grained control
