const express = require('express');
const app = express();
app.use(express.static("public"));

const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
    // res.send('Hello World!11')
    res.sendfile('index.html');
})
app.listen(port, function () {
    console.log('Example app listening on: http://localhost:' + port);
})
