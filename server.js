const py = require('python-shell');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const errRegex = RegExp(' File "[^";]+", ');

app.post('/api/py', (req, res) => {
    py.PythonShell.runString(req.body.post, null, function (err, output) {
        if (err) {
            res.send(`E,${(""+err).replace(errRegex, '')}`);
        } else {
            res.send(`S,${output}`);
        }
    });
});

const testsIn = [
    "billowy",
    "biopsy",
    "chinos",
    "defaced",
    "chintz",
    "sponged",
    "bijoux",
    "abhors",
    "fiddle",
    "begins",
    "chimps",
    "wronged",
]

const testsOut = [
    "billowy IN ORDER",
    "biopsy IN ORDER",
    "chinos IN ORDER",
    "defaced NOT IN ORDER",
    "chintz IN ORDER",
    "sponged NOT IN ORDER",
    "bijoux IN ORDER",
    "abhors IN ORDER",
    "fiddle NOT IN ORDER",
    "begins IN ORDER",
    "chimps IN ORDER",
    "wronged NOT ORDER",
]

app.post('/api/submit', (req, res) => {
    var testInput = req.body.post
    for (i = 0; i < testsIn.length; i++) {
        testInput += '\nprint(isAlphabetical("' + testsIn[i] + '"))'
    }
    py.PythonShell.runString(testInput, null, function (err, output) {
        if (err) {
            res.send(`E,${(""+err).replace(errRegex, '')}`);
        } else {
            var testResults = []
            var passed = 0
            for (i = testsIn.length - 1; i > 0; i--) {
                testResults.push("Testing: " + output[i] + " == " + testsOut[i - 1] + ". Result: " + (output[i] == testsOut[i - 1]))
                if (output[i] == testsOut[i - 1]) passed++
            }
            testResults.push("")
            if (passed > 10) {
                testResults.push("All tests passed, congratulations!")
            } else {
                testResults.push("" + passed + "/11 tests passed.")
            }
            res.send(`S,${testResults}`);
        }
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));