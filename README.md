# Rock Paper Scissors
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). I've left most of its original readme below for future reference.

## Installation
This is a modern JavaScript web app which runs on modern browsers only. It requires the following:
- NodeJS v10 or greater
- npm v5 or greater

Installation on Windows is straight forward but I had trouble getting it to run on an Ubuntu 18.04 (Bionic Beaver) VM. It seems that the usual `sudo apt install nodejs` command will install NodeJS 8.x and there's a different way to install Node on Ubuntu (see https://github.com/nodesource/distributions/blob/master/README.md#debinstall for info):
```
sudo apt install -y curl git
cd ~
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install -y nodejs
```

For any OS, install the app with the following:
```
git clone https://github.com/ajf2/rock-paper-scissors
cd rock-paper-scissors
npm install
```

## Running the App
With Node installed, run the app with a single command:
```
npm start
```

## Playing the Game
Rock Paper Scissors is a two player game. Player one has to choose rock, paper or scissors by pressing the `A`, `S` or `D` key, respectively. Similarly, player two's controls are the `J`, `K` and `L` keys. To prevent cheating, make sure to obscure your hand from the other player's view. Or perhaps fashion a physical divider out of paper or card and place it in the middle of the keyboard.

The game has an "automatic CPU control" feature. If either player one or two presses a key and the other player doesn't press anything within three seconds, the computer will automatically pick a response at random.

## Design Notes
The core code for the game logic is in the `rps.js` file. This is accompanied by an `rps.test.js` file containing Jest unit tests. The functions in rps.js can be changed to alter the game's rules with minimal changes required to the React component files.

The React components are the `App.js`, `Game.js` and `Player.js` files. These each contain a single component and its logic.

# `create-react-app` Readme:
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

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
