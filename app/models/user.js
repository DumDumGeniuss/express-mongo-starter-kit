import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let UserSchema = new Schema({
	email: { type: String, default: '' },
	provider: { type: String, default: '' },
	_id: { type: String, default: '' },
});

let User = mongoose.model('User', UserSchema);

export default User;