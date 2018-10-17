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

1. [x] Set up TypeScript
2. [x] Set up Devtools
3. [x] Set up Redux & tools
4. [x] Set up i18n
5. [x] Set up React router
6. [x] Set up code splitting
7. [ ] Set up basics HOCs: loading, updating, error,...
8. [x] Set up common utilities: common, date, theme,...
9. [x] Set up emotion, tailwind for UI components
10. [x] Set up storybook
11. [ ] Set up data integration: REST API
12. [x] Set up unit tests
13. [ ] Write simple unit tests for renders and logic
14. [ ] Set up babel plugin for tailwind
