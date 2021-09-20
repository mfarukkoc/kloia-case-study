This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Description

It is a case study at the end of the `kloia React Bootcamp`.

## Specs

- As a user, I should be able to view coffees available within the system.
- As a user, I should be able to view coffee categories available within the
  system.
- As a user, I should be able to filter coffees with a free-form text input.
- As a user, I should be able to choose a coffee category to filter visible coffees

## File Structure

├─── **public**<br>
├─── **src**<br>
├────── **app** : App component and Redux store definitions<br>
├────── **assets**<br>
└───────── **fonts** : font resources<br>
├────── **components** : pure components used in many places<br>
├────── **redux** : Redux reducer definitions <br>
├────── **@fake-db** : fake db services<br>
└────── **pages** : Page components<br>

## How to run the project?

Requirements

- `node v14.17.3`
- `npm 6.14.10` or ``yarn 1.22.11`

Install required packages by

`yarn` or `npm install`

Then start development server by

`yarn start` or `npm run start`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`

Run the ESLint linting task.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
