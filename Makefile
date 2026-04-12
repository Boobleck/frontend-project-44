install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	bin/brain-gcd.js
brain-progression:
	bin/brain-progression.js
brain-prime.js:
	bin/brain-prime.js
publish:
	npm publish --dry-run
make lint:
	npx eslint

