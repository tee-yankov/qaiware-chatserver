import mongoose from 'mongoose';

const mongo = mongoose.connect('mongodb://localhost:27017/qai-chatserver');

export default mongo;
