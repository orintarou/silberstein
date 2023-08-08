const express = require('express')
const bodyParser = require('body-parser')

const Pool = require('pg').Pool

const app = express()
const port = 3000

const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
})

//app.use(bodyParser.json())

// app.use(
// 	bodyParser.urlencoded({
// 		extended: true,
// 	})
// )

app.get('/title', (request, response) => {
    response.json({info: 'HELLO W0RLD'});
})

app.post('/saveData', (req, res) => {
 //    console.log("Using Body-parser: ", request)
	// response.status(200).send("HELLO");
	var data = '';
    req.on('data', function (chunk) {
        data += chunk;
    });
    req.on('end', function () {
        console.log("hdr", req.headers['content-type']);
        console.log(typeof(data));
        console.log("raw", data);
    });

    res.status(200).send('HELLO');
})

app.get('/', (request, response) => {
	response.json({info: 'NODE'});
})

app.listen(port, () => {
	console.log(`App running on ${port}.`)
})