import * as express from 'express';
import * as http from 'http';
import * as path from 'path';

const app = express();
const server = http.createServer(app);
const port = process.env.port || 3000;

app.set('port', port);

app.get('/', (req, res) => {
    res.send('Hello world!');
})

server.listen(app.get('port'), () => {
    console.log(`Server running at port ${port}`);
})