# typescript-lambda

Write and deploy your AWS Lambda functions 100% in TypeScript

# write your code

```bash
# install required npm packages
npm install
```

1. open `src-ts/app.ts` in your favorite editor such as VSCode
2. open a seperate terminal and run `yarn watch` to compile the `app.ts` into `built/app.js`

# deploy your code

```bash
# cd into the cdk directory
cd cdk
# install required npm packages
npm install
# see the diff
npx cdk diff
# deploy it
npx cdk deploy
```

# destroy the stack

```bash
cd cdk
npx cdk destroy
```
