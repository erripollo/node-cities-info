const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;

app.get('/api/cities-info', (req, res) => {
    console.log('New GET request to API route');
})



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})