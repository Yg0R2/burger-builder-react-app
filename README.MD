This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pre-conditions

- Install [npm](https://nodejs.org/)
- Install [Create React App](https://github.com/facebook/create-react-app)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Exercise

### #1

- Create TWO new components: UserInput and UserOutput
- UserInput should hold an input element, UserOutput two paragraphs
- Output multiple UserOutput components in the App component (any paragraph texts of your choice)
- Pass a username (of your choice) to UserOutput via props and display it there
- Add state to the App component (=> the username) and pass the username to the UserOutput component
- Add a method to manipulate the state (=> an event-handler method)
- Pass the event-handler method reference to the UserInput component and bind it to the input-change event
- Ensure that the new input entered by the user overwrites the old username passed to UserOutput
- Add two-way-binding to your input (in UserInput) to also display the starting username
- Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

### #2

- Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
- Create a new component (=> Validation) which receives the text length as a prop
- Inside the Validation, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
- Create another component (=> Char) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
- Render a list of CharComponents where each Char receives a different letter of the entered text (in the initial input field) as a prop.
- When you click a Char, it should be removed from the entered text.

Hint: Keep in mind that JavaScript strings are basically arrays!
