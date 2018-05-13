# Memeory

A memory-game played with gifs instead of images. Players can choose any theme they can think of (eg. cats, flowers, cars) and get gifs according to their chosen theme.

**Work-in-progress alpha version**

Plans/fixes for future versions:
* Multiple difficulty settings
* Improve styling
* ... and more

## Motivation

Small learning-project with the following goals:

1. Familiarize myself React with a very interactive project
2. Deepen my knowledge of how to combine React with the asynchronous nature of external APIs
3. Learn Unit Testing and TDD with Jest and Enzyme

## Demo
Playable demo online at:

```
http://patrickschuelke.me/memeory/
```

<img src="https://i.imgur.com/TxF8g3Y.gif" width="500" height="500" />


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To play or develop develop it your local machine you need some form of a live-server package and a package manager like npm.

### Installing

1. Clone the repo

2. Install dependencies the main folder

```
npm install
```

### Development environment

In main folder run:
```
webpack -w -d
```
Then run any form of live server in the /dist folder
```
live-server
```

## Testing environment

Unit tests were written with Jest and Enzyme.
They can be found with the Syntax `ComponentName.test.js`
Tests can be run with the following commands:

```
npm test
npm run test:watch
npm run test:coverage
```

## Built With

* [React](https://github.com/facebook/react) - The web framework used
* [Jest](https://facebook.github.io/jest/) - Testing framework
* [Enzyme](http://airbnb.io/enzyme/) - JavaScript Testing utility for React
* [Bulma](https://bulma.io/) - CSS Framework
* [Tenor](https://tenor.com/) - Public GIF Api

## Author

* **Patrick Schülke** - *Initial work* - [PatrickS83](https://github.com/PatrickS83)


## License

This project is licensed under the MIT License


