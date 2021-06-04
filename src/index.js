const express = require('express');
const cors = require('cors');


const app = express();
const port = 3443;

app.use(express.json());
app.use(cors());

const router = require('./routers/pypiRouter');
app.use(router);

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
});
