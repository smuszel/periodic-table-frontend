const express = require('express');
const templ = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="not-htmlplugin">
        <title>Periodic Table</title>
    </head>
    <body apiurl="${process.env.API_URL}" >
        <script type="text/javascript" src="bundle.js"></script>
    </body>
    </html>
`
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.send(templ);
});

app.listen(80, '0.0.0.0');