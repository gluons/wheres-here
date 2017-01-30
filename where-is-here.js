'use strict';

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.here = factory();
	}
})(this, function () {
	return function here(options) {
		options = options ? options : {};

		return new Promise((resolve, reject) => {
			if (navigator && ('geolocation' in navigator)) {
				navigator.geolocation.getCurrentPosition(
					position => {
						resolve(position);
					},
					reject,
					options
				);
			} else {
				reject(new Error('Geolocation API is not available.'));
			}
		});
	};
});
