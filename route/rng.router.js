import express from 'express';
import rngseed from '../controller/rng.controller.js';

const router = express();

router.get('/', (req, res) =>
    res.send("Home Page")
);

router.get('/rng', (req, res) => {
    res.send(rngseed().join('<br>'));
});

export default router;