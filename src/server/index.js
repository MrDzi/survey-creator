const express = require('express');
const os = require('os');

const app = express();
app.use(express.static("dist"));

app.get('/test', (req, res) => {
    res.send({
        "test": "test"
    });
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
