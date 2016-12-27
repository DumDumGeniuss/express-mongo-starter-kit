import express from 'express';
import user from '../app/apis/user.js';

const router = express.Router();

router.use('/user', user);

router.use((err, req, res, next) => {
	next(err);
});

export default router;