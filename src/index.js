import express from 'express';
import configure from './config/express';
import route from './routes';
import events from 'events';

const app = express();
const eventEmitter = new events.EventEmitter();

// Configure additional application settings
configure(app);

// Set up routes
route(app);

app.listen(3000, function() {
	console.log(`[${new Date().toTimeString().split(' ')[0]}] Server running on port http://localhost:3000/`);
	eventEmitter.emit('serverStart');
});

export function stopServer() {
	console.log('Stopping server...');
	process.exit();
}
