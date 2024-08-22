build:
	npm run build

artifcat:
	tar --exclude=./node_modules -zcvf next.tar.gz .
