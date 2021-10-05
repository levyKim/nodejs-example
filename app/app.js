const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
    res.send('Hello World!11')
})
app.listen(port, function () {
    console.log('Example app listening on port: 1-' + port);
})
