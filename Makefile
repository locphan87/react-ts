ENV ?= staging

setup:
	cp .env.example .env
	cp data.json.example data.json

setup-env:
	yarn
	cp .env.$(ENV) .env
	make build-css

start:
	make setup-env
	node ./scripts/start.js

build-css:
	tailwind build ./src/theme/index.tailwind.css -c ./src/theme/tailwind.js -o ./src/theme/index.css

build-static:
	make setup-env
	node ./scripts/build.js
