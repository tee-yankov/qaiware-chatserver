import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

export default function(app) {
	app.use(bodyParser.urlencoded({
		'extended': true
	}));
	app.use(bodyParser.json());
	app.use(cors());

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	}
}
