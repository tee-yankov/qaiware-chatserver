import request from 'superagent';
import expect from 'expect';

describe('API', function() {

	// Ensure the API is returning 404 for wrong routes
	describe('wrong route', function() {
		it('should return 404', function(done) {
			request.get('localhost:3000/')
				.end(function(err, res) {
					expect(res.status)
						.toEqual(404);
					expect(res.body.errors)
						.toEqual(['Not a valid route']);
					done();
				});
		});
	});
});
