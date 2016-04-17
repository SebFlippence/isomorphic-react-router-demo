.PHONY: run
run:
	make dependencies start

.PHONY: dependencies
dependencies:
	npm install

.PHONY: start
start:
	npm start
