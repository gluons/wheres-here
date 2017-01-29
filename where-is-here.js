'use strict';

module.export = (function (root) {
	return function (options) {
		options = options ? options : {};
		return new Promise((resolve, reject) => {
			if (root.navigator && ('geolocation' in root.navigator)) {
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
})(this);
