import Messages from './api/routes/messages.route';

export default function(app) {
	app.use('/messages', Messages);

	app.use('/', function(req, res) {
		res.status(404)
			.json({
				'errors': ['Not a valid route']
			});
	});
}
