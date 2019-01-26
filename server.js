const py = require('python-shell');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/api/py', (req, res) => {
    console.log(req.body.post);
    py.PythonShell.runString(req.body.post, null, function (err, output) {
        if (err) throw err;
        console.log(output)
        res.send(
            `${output}`,
        );
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));