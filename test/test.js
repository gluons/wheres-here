/* global here, assert */
'use strict';

describe('Where is here?', function () {
	this.timeout(5000);

	it('should fulfil or reject Promise from Geolocation API', () => {
		return here({ timeout: 1000 }).then(
			position => {
				assert.property(position, 'coords');
				assert.property(position, 'timestamp');
				assert.property(position.coords, 'latitude');
				assert.property(position.coords, 'longitude');
			},
			err => {
				if (err instanceof Error) {
					throw err;
				} else {
					assert.property(err, 'code');
				}
			}
		);
	});
});
