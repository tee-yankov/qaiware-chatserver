import request from 'superagent';
import expect from 'expect';
import {
	before, describe, it, after
}
from 'mocha';
let app = {};

// Start the server before testing anything
before(function() {
	process.env.NODE_ENV = 'testing';
	app = require('../build/index.js');
});

// Stop the server after testing is done
after(function() {
	app.stopServer();
});

describe('API', function() {

	// Ensure the API is returning 404 for wrong routes
	describe('wrong route', function() {
		it('should return 404', function(done) {
			request.get('localhost:3000/')
				.end(function(err, res) {
					expect(err)
						.toNotBe(null);
					expect(res.status)
						.toEqual(404);
					expect(res.body.errors)
						.toEqual(['Not a valid route']);
					done();
				});
		});
	});
});
