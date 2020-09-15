# Project Boilerplate for React / TypeScript / ESLint / Webpack / Babel / Jest / with Directory Aliasing.
This boilerplate is an extension of Vincent Chee’s blog post, [‘How to Set Up a React TypeScript Project form Scratch with Babel and Webpack’](https://medium.com/@dahvinchee/how-to-set-up-a-react-typescript-project-from-scratch-with-babel-and-webpack-6b069881229d). I extended Vincent's boilerpate in three ways:
1. I replaced [TSLint](https://palantir.github.io/tslint/) with [ESLint](https://eslint.org/) (TSLint has been deprecated in favor of ESLint).
2. I added Jest and React Testing Library.
3. I added webpack-aware directory aliasing support for ESLint and Jest.
## Running Locally
Make sure you have [Node.js](https://nodejs.org/) installed.
```
git clone https://github.com/patrick-s-young/react-ts-eslint-webpack-babel.git
cd react-ts-eslint-webpack-babel
npm install
npm start
npm test
```

## ESLint Configuration
The boilerplate's ESLint configuration file and peer dependencies were created with the following command-line actions:  
``` 
$ npm i -D eslint  
$ npx eslint —init 
```
  
_How would you like to use ESLint?_  
[] To check syntax only  
[] To check syntax and find problems  
**[] To check syntax, find problems, and enforce code style**  
  
_What type of modules does your project use?_  
**[] JavaScript modules (import/export)**  
[] CommonJS (require/exports)  
[] None of these  
  
_Which framework does your project use?_  
**[] React**  
[] Vue.js  
[] None of these  
  
_Does your project use TypeScript?_ No / **Yes**  
  
_Where does your code run?_  
**[] Browser**  
[] Node  
  
_How would you like to define a style for your project?_  
**[] Use a popular style guide**  
[] Answer questions about your style  
[] Inspect your JavaScript file(s)  
  
_Which style guide do you want to follow?_  
**[] Airbnb: https://github.com/airbnb/javascript**  
[] Standard: https://github.com/standard/standard  
[] Google: https://github.com/google/eslint-config-google  
  
_What format do you want your config file to be in?_  
[] JavaScript  
[] YAML  
**[] JSON**  

At this point, ESLint checks the peer dependencies of your desired configuration and displays the packages needed along with a prompt to install them...  
_Would you like to install them now with npm?_ No / **Yes**   
  
In addition to installing the modules, ESLint creates the **.eslintrc.json** configuration file in the root directory of your project.  
  
## Jest Configuration
**Jest** with **React Testing Library** required the installation of these modules:
  ```
  $ npm i -D @testing-library/jest-dom @testing-library/react @babel-jest jest
  ```
  Add `jest.config.js` to your project's root directory with these settings:
```
module.exports = {
  moduleNameMapper: {
    "\\.css$": "<rootDir>/__mocks__/styleMock.js"
  },
  resolver: "jest-webpack-resolver",
  setupFilesAfterEnv: ['<rootDir>/src/setUpTests.js']
}
```
Key/values for`jest.config.js`:
`moduleNameMapper`: map file types to mocks.
`resolver`: the module to use for resolving directory aliases defined in **webpack.config.js** (_more about Jest directory aliasing in the following section_).
`setupFilesAfterEnv`: _path to global setup file._

## Directory Aliasing  
[Directory aliasing](https://medium.com/@etherealm/getting-rid-of-relative-paths-in-imports-using-webpack-alias-78d4bf15bb42) was added to the project using these steps:  
**Webpack**: Add _alias_ values to the module resolution option in `webpack.config.js`:
```
resolve {
 alias: {
  Components: path.resolve(__dirname, ‘./src/components/‘)
  }
}
```
**TypeScript**: Add _paths_ values to `tsconfig.js`:
```
“paths”: {
  “Components/*”: [“components/*”]
}
```
**ESLint**: _Install_ `eslint-import-resolver-webpack`. _This module will look for_ `webpack.config.js` _as a sibling of the first ancestral_ `package.json` _and expose the alias values to ESLint._
```
$ npm i -D eslint-import-resolver-webpack
```
Then add this _import/resolver_ value to `.eslintrc.json`:
```
“settings”: {
  “import/resolver”: “webpack”
}
```
NOTE: _To assure propagation of ESLint changes within VS Code, uninstall the ESLint extension, reload the project, and reinstall the ESLint._

**Jest**: Add this configuration setting to `package.json`.
```
  "jestWebpackResolver": {
    "silent": true,
    "webpackConfig": "webpack.config.js"
  }
```
NOTE: _I initially placed the_ **jestWebpackResolver** _setting in my_ `jest.config.js` _but it did not work. See this_ **jest-webpack-resolver** _[issues discusson](https://github.com/mkg0/jest-webpack-resolver/issues/17#issuecomment-692344918) for more detail: ._

## Built With
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [TypeScript](https://www.typescriptlang.org/) - Extends JavaScript by adding types.
* [ESLint](https://eslint.org/) - An analysis tool for identifying problematic patterns found in JavaScript code.
* [Webpack](https://webpack.js.org/) - A static module bundler for JavaScript applications.
* [Babel](https://babeljs.io/) - A toolchain for converting ECMAScript 2015+ code into a backwards compatible JavaScript.
* [Jest](https://jestjs.io/) - A delightful JavaScript Testing Framework with a focus on simplicity.
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - A family of packages helps you test UI components in a user-centric way.

## Authors
* [Patrick Young](https://github.com/patrick-s-young) extending the work of [Vincent Chee](https://github.com/davinchee), [Gaurav Gupta](https://medium.com/swlh/react-testing-getting-jest-to-play-nicely-with-webpack-static-assets-imports-74b1c1472234), and [Mark A](https://dev.to/macmacky/how-to-configure-webpack-with-react-testing-library-from-the-ground-up-4occ).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Aknowledgements
* [Eric Stallings](https://github.com/EricStallings) for the inspiration.
