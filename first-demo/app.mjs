import express from 'express';

import connectToDatabase from './helpers.mjs';

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, Docker</h1>');
});

await connectToDatabase();

app.listen(3030);
