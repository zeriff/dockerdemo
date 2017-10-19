import { Router } from 'express';

export default () => {
    var router = Router();

    router.route('/').get((req, res) => {
        res.json({ message: 'Dockertest' });
    });
    return router;
};
