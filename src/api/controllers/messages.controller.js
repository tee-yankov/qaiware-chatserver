import Messages from '../models/messages.model';

export function index(req, res) {
	Messages.find(function(err, messages) {
		if (err) {
			return res.status(500)
				.json({
					'errors': err.message
				});
		}

		res.status(200)
			.json(messages);
	});
}

export function create(req, res) {
	Messages.create({
		author: req.body.author,
		message: req.body.message
	}, function(err) {
		if (err) {
			res.status(500)
				.json({
					'errors': err.message
				});
		}

		res.status(200)
			.json({
				'messages': 'Message posted!'
			});
	});
}
