import mongoose from '../../config/mongoose';

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	message: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	timestamp: {
		type: Date,
		required: true,
		default: Date.now()
	}
});

const MessageModel = mongoose.model('Messages', MessageSchema);

export default MessageModel;
