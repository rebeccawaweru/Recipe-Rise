# Recipe-Rise
Web Application based on different user recipes and a corresponding expense tracker

The project will solve the problem of disorganized recipe management, expense tracking and inefficient meal planning.It offers a user-friendly platform for individuals to seamlessly organize, discover, and follow recipes, while also helping them track and budget for the ingredients they purchase. By integrating these features, the project aims to simplify the cooking experience and meal planning, enabling users to enjoy their culinary journey with greater convenience and cost-effectiveness.

Official site: https://reciperise.netlify.app/

Previews:

<img width="944" alt="landingpage" src="https://github.com/rebeccawaweru/Recipe-Rise/assets/79188888/bdb59fd5-d1d5-4ed9-8d98-e628035c76bf">
<img width="944" alt="recipes" src="https://github.com/rebeccawaweru/Recipe-Rise/assets/79188888/32d3daac-8de3-4c4e-a2c6-0efe4a343a36">
<img width="944" alt="reports" src="https://github.com/rebeccawaweru/Recipe-Rise/assets/79188888/c3f91fb1-43a1-453c-8168-9f60817c1e0d">



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

Frontend hosting: https://www.netlify.com/

Backend hosting: https://render.com/

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# removing a file from git
git rm --cached <filename>

# removing .env from commit history
git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch .env" HEAD
