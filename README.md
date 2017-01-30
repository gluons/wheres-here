# Where is here?
[![license](https://img.shields.io/github/license/gluons/wheres-here.svg?style=flat-square)](https://github.com/gluons/wheres-here/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/wheres-here.svg?style=flat-square)](https://www.npmjs.com/package/wheres-here)
[![Bower](https://img.shields.io/bower/v/wheres-here.svg?style=flat-square)](https://github.com/gluons/wheres-here)
[![Travis](https://img.shields.io/travis/gluons/wheres-here.svg?style=flat-square)](https://travis-ci.org/gluons/wheres-here)
[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9C27B0.svg?style=flat-square)](https://github.com/gluons/eslint-config-gluons)

🌏 Promisified Geolocation

Get current geolocation by [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation) as [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Installation
**Via [Bower](https://bower.io/):**
```
bower install wheres-here
```

**Via [NPM](https://www.npmjs.com/):**

[![NPM](https://nodei.co/npm/wheres-here.png)](https://www.npmjs.com/package/wheres-here)
```
npm install wheres-here
```
**Or [Yarn](https://yarnpkg.com/):**
```
yarn add wheres-here
```

## Usage

You can bundle `wheres-here` with [webpack](https://github.com/webpack/webpack) for using in browser.

```javascript
const here = require('wheres-here');

here().then(position => {
	let lat = position.coords.latitude;
	let lng = position.coords.longitude;
	console.log(`I'm at ${lat}, ${lng}.`); // Somewhere on the Earth.
}).catch(err => {
	console.error(err); // Oh! It's error.
});
```

Or directly import to your webpage.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="wheres-here.js"></script>
</head>
<body>
	<script>
		here().then(p => {
			console.log(p);
		}).catch(e => {
			console.error(e);
		});
	</script>
</body>
</html>
```

## API

### here([options])
#### options
Type: [`PositionOptions`](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions)

Options for [`Geolocation.getCurrentPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)
