import Request from '../build/api/models/request.model';
import {
	describe, before, it
}
from 'mocha';

describe('Request', function() {

	// Clear the Request collection before testing
	before('clear request collection', function(done) {
		Request.remove(function(err) {
			if (err) {
				throw err;
			}

			done();
		});
	});

	// Save a test record in the Request collection
	describe('#save', function() {
		it('should log a request without error', function(done) {
			Request.create({
				type: 'test',
				payload: 'test'
			}, function(err) {
				if (err) {
					throw err;
				}

				done();
			});
		});
	});

	// List all items in the Request collection
	// Make sure there's at least one item from the previous test
	describe('#index', function() {
		it('should fetch a request from the database', function(done) {
			Request.find(function(err, requests) {
				if (err) {
					throw err;
				}

				if (!requests.length) {
					throw new Error('No requests found!');
				}

				done();
			});
		});
	});
});
