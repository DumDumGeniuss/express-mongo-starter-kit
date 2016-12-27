import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.get('/:id', (req, res) => {
	User.findById(req.params.id, (err, user) => {
		if(err) {
			res.send(err);
		} else {
			res.json({
				user: user
			});
		}
	});
});

router.post('/', (req, res) => {
	let newUser = new User();
	let data = req.body;
	newUser.email = data.email || '';
	newUser.provider = data.provider;
	newUser._id = data._id;

	User.findById(newUser._id, (err, user) => {
		if(user) {
			res.send(newUser);
		} else {
			newUser.save((err, newUser) => {
				if(err) {
					res.send(err);
				} else {
					res.json(newUser);
				}
			});
		}
	});
});

export default router;