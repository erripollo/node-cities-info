const express = require('express');
const port = process.env.PORT || 3000;
require('dotenv').config();
const apiRouter = require('./routes/api');
const notFoundRouter = require('./routes/404');

const app = express();

app.use('/api', apiRouter);
app.use(notFoundRouter);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})