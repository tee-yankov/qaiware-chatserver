import express from 'express';
import configure from './config/express';
import route from './routes';

const app = express();

// Configure additional application settings
configure(app);

// Set up routes
route(app);

app.listen(3000, function() {
	console.log(`[${new Date().toTimeString().split(' ')[0]}] Server running on port http://localhost:3000/`);
});
