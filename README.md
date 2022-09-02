# Example Lurk in browser with wasm

## Prerequisites
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) or [npm](https://nodejs.org/en/download/package-manager/)
- [webpack](https://webpack.js.org/guides/installation/)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

## Install webpack using `yarn` and `npm`
```
# Using yarn
yarn add -D webpack-cli 

# Using npm
npm install --save-dev webpack
```

## Build and Run
```
yarn install
yarn start
```

## Test
Go to [localhost:8080](http://localhost:8080) to view the evaluator

<img width="1341" alt="image" src="https://user-images.githubusercontent.com/4479171/186725814-c38c2567-e036-42c6-880c-ca11165596de.png">

## Live Demo
[wasm-eval](https://wasm-eval.lurk-lang.org/)

# Build as a library
Run the following to build the distributable library:

## Development
```
./build-development.sh
```

## Production
```
./build-production.sh
```

Copy the dist/environment to your project.