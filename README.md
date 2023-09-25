# MEMORIZE by Javier Espinoza

This is a React project that shows a board game of Memorize. One types their name first, and then must pick between two cards to see if they match. If they do, then the user obtains a success point. If not, the user obtains an error point. The goal is to match all of the cards with their respective partner.

## Technologies

To develop this project, HTML, SCSS/SASS and Typescript were used. The framework used to create the components was React, and Bootstrap was used to help with the styling and the various responsive components. It also uses Vite to bundle and build the application more efficiently and faster.

For requirements, Node v18.17.1 is needed, as well as Vite.

## How to run locally

Clone the repo into your folder:

`git clone https://github.com/jaevespinoza/memorize.git`

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

Lastly, for responsiveness, Bootstrap was used. The application was tested in the [Google Chrome Tool Window for Mobile Design](https://i.imgur.com/K2y5lST.png)

## Accesibility

To add accessibility, you can move through the cards with the tab key, and also reveal the focused card with either the Enter or Space key.

Another library that was used for accessibility was i18n/react-i18n. It detects the browser's language and sets it to either English or Spanish.

For future work, what could be added is different themes (dark or light) or navigation with arrow keys.

## Links

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Yarn](https://yarnpkg.com/)

## Deploy

The application was actually deployed in Netlify, setting up a small server where the page is now hosted:

[Link](https://stellar-travesseiro-bbf442.netlify.app/)
