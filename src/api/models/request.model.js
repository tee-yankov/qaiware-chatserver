import mongoose from '../../config/mongoose';

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
	type: {
		type: String,
		required: true
	},
	paylod: {
		type: Object,
		required: false
	},
	created_at: {
		type: Date,
		required: true,
		default: Date.now()
	}
});

const RequestModel = mongoose.model('Request', RequestSchema);

export default RequestModel;
