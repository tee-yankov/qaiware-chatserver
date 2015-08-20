import request from 'superagent';
import expect from 'expect';
import Request from '../build/api/models/request.model';

const sendTextUrl = 'localhost:3000/messages/send_text';
const sendEmotionUrl = 'localhost:3000/messages/send_emotion';

describe('Message', function() {
	before('clear request collection', function(done) {
		Request.remove(function(err) {
			if (err) {
				throw err
			}

			done();
		});
	});

	describe('#send_text', function() {
		it('should return status 201 on a valid payload', function(done) {
			request.post(sendTextUrl)
				.send({
					payload: 'Passing message!'
				})
				.end(function(err, res) {
					expect(res.status)
						.toEqual(201);
					done();
				});
		});

		it('should return 412 on payload less than 1 character in length', function(done) {
			request.post(sendTextUrl)
				.send({
					payload: ''
				})
				.end(function(err, res) {
					expect(res.status)
						.toEqual(412);
					done();
				});
		});

		it('should return 412 on payload over 160 characters in length', function(done) {
			request.post(sendTextUrl)
				.send({
					payload: 'a'.repeat(161)
				})
				.end(function(err, res) {
					expect(res.status)
						.toEqual(412);
					done();
				});
		});
	});

	describe('#send_emotion', function() {
		it('should return status 201 on valid payload', function(done) {
			request.post(sendEmotionUrl)
				.send({
					payload: 'valid'
				})
				.end(function(err, res) {
					expect(res.status)
						.toEqual(201);
					done();
				});
		});

		it('should return status 412 on payload under 2 characters in length', function(done) {
			request.post(sendEmotionUrl)
				.send({
					payload: 'a'
				})
				.end(function(err, res) {
					expect(res.status)
						.toEqual(412);
					done();
				});
		});

		it('should return status 412 on payload over 10 characters in length', function(done) {
			request.post(sendEmotionUrl)
				.send({
					payload: 'a'.repeat(11)
				})
				.end(function(err, res) {
					expect(res.status)
						.toEqual(412);
					done();
				});
		});

		const numberTestParameters = ['111', '12sda', 'sda12', '21312s-120s', 'a#Sda1', '1multipass'];
		numberTestParameters.forEach(function(test) {
			it('should return 412 on payload containing characters between 0-9', function(done) {
				request.post(sendEmotionUrl)
					.send({
						payload: test
					})
					.end(function(errr, res) {
						expect(res.status)
							.toEqual(412);
						done();
					});
			});
		});
	});

	describe('request collection', function() {
		it('should return all of the requests from this test', function(done) {
			Request.find(function(err, requests) {
				if (err) {
					throw err;
				}

				expect(requests.length).toEqual(12);

				done();
			});
		});
	});
});
