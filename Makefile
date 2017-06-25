# Commands
NPM_CMD ?= npm

.PHONY: coverage test

default: test lint coverage compile

run: test format lint coverage compile start

lint:
	$(NPM_CMD) run lint

format:
	$(NPM_CMD) run format

compile:
	[[ -d 'dist' ]] || mkdir dist
	$(NPM_CMD) run build:production

coverage:
	$(NPM_CMD) run coverage

test:
	$(NPM_CMD) test

start:
	$(NPM_CMD) start
