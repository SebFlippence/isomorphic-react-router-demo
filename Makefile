.PHONY: build
build:
	node_modules/.bin/node-sass --output-style compressed src/styles/main.scss dist/styles/main.css
	node_modules/.bin/browserify src/js/main.js -t babelify --outfile dist/js/main.js
	node_modules/.bin/browserify src/js/existing.js -t babelify --outfile dist/js/existing.js

.PHONY: dependencies
dependencies:
	npm install
	node_modules/.bin/bower install
	mkdir -p dist/js && mkdir -p dist/styles

.PHONY: watch
watch:
	node_modules/.bin/node-sass --watch src/styles/main.scss dist/styles/main.css &
	node_modules/.bin/watchify src/js/main.js -t babelify --outfile dist/js/main.js
	node_modules/.bin/watchify src/js/existing.js -t babelify --outfile dist/js/existing.js

.PHONY: serve
serve:
	node_modules/.bin/watchify src/js/main.js -t babelify --outfile dist/js/main.js &
	node_modules/.bin/node-sass src/styles/main.scss dist/styles/main.css &
	node_modules/.bin/node-sass --watch src/styles/main.scss dist/styles/main.css &
	npm start

.PHONY: serve
serve_existing:
	node_modules/.bin/watchify src/js/existing.js -t babelify --outfile dist/js/existing.js &
	node_modules/.bin/node-sass src/styles/main.scss dist/styles/main.css &
	node_modules/.bin/node-sass --watch src/styles/main.scss dist/styles/main.css &
	python -m SimpleHTTPServer
