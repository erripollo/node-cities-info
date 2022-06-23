const express = require('express');
const port = process.env.PORT || 3000;
require('dotenv').config()
const apiRouter = require('./routes/api')

const app = express();

app.use('/api', apiRouter)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})