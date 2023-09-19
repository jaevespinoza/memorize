# MEMORIZE by Javier Espinoza

This is a React project that shows a board game of Memorize. One types their name first, and then must pick between two cards to see if they match. If they do, then the user obtains a success point. If not, the user obtains an error point. The goal is to match all of the cards with their respective partner.

## Technologies

To develop this project, HTML, SCSS/SASS and Typescript were used. The framework used to create the components was React, and Bootstrap was used to help with the styling and the various responsive components. It also uses Vite to bundle and build the application more efficiently and faster.

## How to run locally

Simply use the command:

`yarn install`

To install all the dependencies in the node_modules folder, and then:

`yarn dev`

to run the application. The port used will be http://localhost:5173/.

To run the tests, use the command:

`yarn test`

and it will run the tests in Vitest.

## Libraries used in the application

One of the main libraries that was used for state handling was [@reduxjs/toolkit](https://redux-toolkit.js.org/). This helped with handling the various parts of the application, such as the success and error count, as well as obtaining the images thanks to its `createApi` method.

## Links

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Yarn](https://yarnpkg.com/)
