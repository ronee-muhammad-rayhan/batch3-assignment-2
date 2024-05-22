# batch3-assignment-2
npm init
<!-- ./dist/server.js //instead of index.js -->

<!-- https://expressjs.com/ -->
npm install express --save

<!-- https://www.typescriptlang.org/download/ -->
npm install typescript --save-dev

<!-- https://mongoosejs.com/docs/index.html -->
npm install mongoose --save

<!-- https://www.npmjs.com/package/cors -->
npm install cors

<!-- https://www.npmjs.com/package/dotenv -->
npm install dotenv --save

tsc --init

<!-- (npm i -g typescript) -->

npm i --save-dev @types/node
npm i --save-dev @types/express


<!-- //node ./src/app.ts -->

<!-- typescript compiler -->
tsc

<!-- node ./dist/app.js -->
node ./dist/app.js

<!-- npm i nodemon -->

<!-- npm install -g nodemon # or using yarn: yarn global add nodemon -->
<!-- npm install --save-dev nodemon # or using yarn: yarn add nodemon -D -->

npm i -D nodemon

nodemon ./dist/app.js

<!-- terminal -->
<!-- check whether my ubuntu is arm or x86_64 -->
lscpu

curl -o- "https://dl-cli.pstmn.io/install/linux64.sh" | sh

<!-- https://www.postman.com/downloads/?utm_source=postman-home -->

<!-- npm install -g newman -->

<!-- tsc watcher (watch flag) / observer -->
tsc -w

<!-- https://www.npmjs.com/package/ts-node-dev -->
<!-- npm i ts-node-dev -->
<!-- yarn add ts-node-dev --dev -->
<!-- npm i ts-node-dev --save-dev -->
npm i ts-node-dev --save-dev
<!-- for powershell / terminal / command-prompt issues -->
<!-- npm i -g ts-node-dev --save-dev -->
<!-- ts-node-dev --respawn --transpile-only server.ts -->
<!-- ts-node-dev --respawn --transpile-only ./src/server.ts -->
ts-node-dev --respawn --transpile-only ./src/app.ts

<!-- ts-node-dev --respawn --transpile-only server.ts -->
<!-- tsnd --respawn server.ts -->
<!-- ts-node-dev --inspect -- my-script.ts -->


<!-- https://mongoosejs.com/docs/index.html -->

<!-- Part 1 completed -->
<!-- Basic Setup -->

<!-- https://eslint.org/ -->
<!-- npm init @eslint/config@latest -->
<!-- google search <typescript eslint> as eslint latest version is so-called stable -->
<!-- https://typescript-eslint.io/getting-started/ -->
npm install --save-dev eslint @eslint/js typescript typescript-eslint

https://eslint.org/docs/latest/use/getting-started

<!-- create a file in the root named eslint.config.mjs -->
<!-- Configure Rules -->
https://eslint.org/docs/latest/use/configure/rules

<!-- Rules Reference -->
https://eslint.org/docs/latest/rules/

<!-- Specifying Globals -->
https://eslint.org/docs/latest/use/configure/language-options

<!-- TODO: Add prettier -->

<!-- industry best practice -->
in a real production grade app development organized code is important for maintainability and performance and productivity. hence eslint and prettier like extensions are done using command-line. to push code in a branch some prettier like- command are mandatory here. before commit (professionally) ===> clean code
refactoring

<!-- npx eslint . --fix -->
<!-- npx eslint --fix -->
<!-- npx eslint . -->
<!-- npx eslint src -->

npx eslint src

npx eslint . --fix

https://eslint.org/docs/latest/use/configure/ignore

<!-- npx eslint . --ignore-pattern ".config/*" --># batch3-assignment-2

<!-- ToDo -->
<!-- remove ObjectIDs from elements  -->
