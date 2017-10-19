import { Router } from 'express';

export default ({ config, db }) => {
    var router = Router();

    router.route('/').get((req, res) => {
        res.json({ message: 'Dockertest' });
    });
};
