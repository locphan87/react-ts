# React TypeScript

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

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

### Storybook

* Open the storybook to view UI components

```shell
$ yarn storybook
```

### Rebuild CSS

When you make a change to theme configuration files, it's necessary to rebuild CSS

Theme configuration files:
- `tailwind.js`
- `colors.tsx`
- `fonts.tsx`

```shell
$ yarn build:css
```

### Test the app

```shell
$ yarn test
```

## Roadmap

- [x] Set up TypeScript
- [x] Set up Devtools
- [x] Set up Redux & tools
- [x] Set up i18n
- [x] Set up React router
- [x] Set up code splitting
- [ ] Set up basics HOCs: loading, updating, error,...
- [x] Set up common utilities: common, date, theme,...
- [x] Set up emotion, tailwind for UI components
- [x] Set up storybook
- [x] Set up data integration: REST API
- [x] Set up unit tests
- [ ] Write simple unit tests for renders and logic
- [ ] Set up babel plugin for tailwind
