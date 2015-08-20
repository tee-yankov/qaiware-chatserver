import Request from '../models/request.model';

export function checkPaylod(req, res) {
	if (!req.body.payload) {
		return res.status(412)
			.json();
	}

	validatePaylod(req.params.action, req.body.payload)
		.then(function(response) {
			if (!response) {
				return res.status(412)
					.json();
			}

			res.status(201)
				.json();
		})
		.catch(function() {
			res.status(412)
				.json();
		});
}

export function requestLogger(req, res, next) {
	const whitelist = ['send_text', 'send_emotion'];
	const requestType = req.originalUrl.split('/')[2];
	let type = 'disallowed';

	if (whitelist.indexOf(requestType) !== -1) {
		type = requestType;
	}

	Request.create({
		type,
		payload: req.body.payload || null
	}, function(err) {
		if (err) {
			return res.status(500)
				.json({
					'errors': 'Something went wrong when logging the request'
				});
		}
		next();
	});
}

function validatePaylod(action, payload) {
	const sendText = new RegExp('^.{1,160}$');
	const sendEmotion = new RegExp('^[^0-9]{2,10}$');

	return new Promise((resolve, reject) => {
		switch (action) {
			case 'send_text':
				resolve(sendText.test(payload));
				break;
			case 'send_emotion':
				resolve(sendEmotion.test(payload));
				break;
			default:
				reject(false);
		}
	});
}
