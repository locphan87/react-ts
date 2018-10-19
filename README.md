# React TypeScript

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Table of Contents
=================

* [Architecture](#architecture)
* [Getting started](#getting-started)
* [Development flow](#development-flow)
   * [Run the app](#run-the-app)
   * [Start the mock server](#start-the-mock-server)
   * [Storybook](#storybook)
   * [Rebuild CSS](#rebuild-css)
   * [Test the app](#test-the-app)
* [Deployment](#deployment)
* [Roadmap](#roadmap)

## Architecture

[Details](https://github.com/phanhoangloc/react-achitecture)

## Getting started

```shell
$ git clone git@github.com:phanhoangloc/react-ts.git
$ yarn setup
$ yarn start
```

## Development flow

### Run the app

* Run the app with the default environment (staging)

```shell
$ yarn start
```

* Run the app with a specific environment

```shell
$ ENV=production yarn start
```

### Start the mock server

We set up a mock server to ease front-end development. Feel free to edit `data.json` as your need.

* Start a json server at port 1337

```shell
$ yarn server
```

### Storybook

* Open the storybook to view UI components

```shell
$ yarn storybook
```

### Rebuild CSS

When you make a change to theme configuration files, it's necessary to rebuild CSS

Theme configuration files:
- `tailwind.js`
- `colors.js`

```shell
$ yarn build:css
```

### Test the app

```shell
$ yarn test
```

## Deployment

* Make a new build

```shell
$ yarn build
```

* Analyze dependencies

```shell
$ yarn analyze
```
