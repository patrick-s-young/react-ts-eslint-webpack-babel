# Boilerplate for React / TypeScript / ESLint / Webpack / Babel Project.
This boilerplate is an extension of Vincent Chee’s blog post, [‘How to Set Up a React TypeScript Project form Scratch with Babel and Webpack’](https://medium.com/@dahvinchee/how-to-set-up-a-react-typescript-project-from-scratch-with-babel-and-webpack-6b069881229d). I extended Vincent's boilerpate in two ways:
1. I replaced [TSLint](https://palantir.github.io/tslint/) with [ESLint](https://eslint.org/) (TSLint has been deprecated in favor of ESLint).
2. I added support for [directory aliasing](https://medium.com/@etherealm/getting-rid-of-relative-paths-in-imports-using-webpack-alias-78d4bf15bb42).

## Running Locally
Make sure you have [Node.js](https://nodejs.org/) installed.
```
git clone https://github.com/patrick-s-young/react-ts-eslint-webpack-babel.git
cd react-ts-eslint-webpack-babel
npm install
npm start
```

## ESLint Configuration
The boilerplate's ESLint configuration file and peer dependencies were created with the following command-line actions:  
$ npm i -D eslint  
$ npx eslint —init  
  
_How would you like to use ESLint?_  
  To check syntax only  
  To check syntax and find problems  
  **To check syntax, find problems, and enforce code style**  
  
_What type of modules does your project use?_  
  **JavaScript modules (import/export)**  
  CommonJS (require/exports)  
  None of these  
  
_Which framework does your project use?_  
  **React**  
  Vue.js  
  None of these  
  
_Does your project use TypeScript?_ No / **Yes**  
  
_Where does your code run?_  
  **Browser**  
  Node  
  
_How would you like to define a style for your project?_  
  **Use a popular style guide**  
  Answer questions about your style  
  Inspect your JavaScript file(s)  
  
_Which style guide do you want to follow?_  
  **Airbnb: https://github.com/airbnb/javascript**  
  Standard: https://github.com/standard/standard  
  Google: https://github.com/google/eslint-config-google  
  
_What format do you want your config file to be in?_  
  JavaScript  
  YAML  
  **JSON**  

At this point, ESLint checks the peer dependencies of your desired configuration and displays the packages needed along with a prompt to install them...  
_Would you like to install them now with npm?_ No / **Yes**   
  
In addition to installing the modules, ESLint creates the **.eslintrc.json** configuration file in the root directory of your project.  
  
## Directory Aliasing  
[Directory aliasing](https://medium.com/@etherealm/getting-rid-of-relative-paths-in-imports-using-webpack-alias-78d4bf15bb42) was added to the project using these steps:  
**Add _alias_ values to the module resolution option in webpack.config.js:**
```
resolve {
 alias: {
  Components: path.resolve(__dirname, ‘./src/components/‘),
  Styles: path.resolve(_dirname, ‘./src/styles’),
  }
}
```
**Add _paths_ values to tsconfig.js:**
```
“paths”: {
  “Components/*”: [“components/*”],
  “Styles/*”: [“styles/*”],
}
```
**Install _eslint-import-resolver-webpack_.**
_This module will look for webpack.config.js as a sibling of the first ancestral package.json and expose the alias values to ESLint._
```
$ npm i -D eslint-import-resolver-webpack
```
**Add this _import/resolver_ value to _.eslintrc.json_:**
```
“settings”: {
  “import/resolver”: “webpack”
}
```
**To test the directory aliasing, the following changes where made:**  
_src/index.tsx_  
\- Import App from ‘./components/App’  
\+ import App from ‘Components/App’  
  
_src/App.tsx_  
\- import ‘../styles/index.css’  
\+ import ’Styles/index.css'  
  
**NOTE: There was an issue with ESLint not finding declaration files for imported modules. This was resolved by editing the following _parserOptions_ value in _.eslintrc.json_:**  
\- “ecmaVersion”: 12  
\+ “ecmaVersion”: 11  
_To assure propagation of ESLint changes within VS Code, uninstall the ESLint extension, reload the project, and reinstall the ESLint extension._

## Built With
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [TypeScript](https://www.typescriptlang.org/) - Extends JavaScript by adding types.
* [ESLint](https://eslint.org/) - An analysis tool for identifying problematic patterns found in JavaScript code.
* [Webpack](https://webpack.js.org/) - A static module bundler for JavaScript applications.
* [Babel](https://babeljs.io/) - A toolchain for converting ECMAScript 2015+ code into a backwards compatible JavaScript.

## Authors
* [Patrick Young](https://github.com/patrick-s-young) extending the work of [Vincent Chee](https://github.com/davinchee) @davinchee

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Aknowledgements
* [Eric Stallings](https://github.com/EricStallings) for the inspiration. @EricStallings
