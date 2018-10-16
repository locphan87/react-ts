ENV ?= staging

setup:
	cp .env.example .env

setup-env:
	yarn
	cp .env.$(ENV) .env

start:
	make setup-env
	react-scripts-ts start

build-css:
	tailwind build ./src/theme/index.tailwind.css -c ./src/theme/tailwind.js -o ./src/theme/index.css

build-static:
	make setup-env
	react-scripts-ts build
